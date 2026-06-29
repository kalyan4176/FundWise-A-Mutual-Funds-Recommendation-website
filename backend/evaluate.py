import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler
from collections import Counter

df = pd.read_csv('funds.csv')

# ---- Prepare features (same as model.py) ----
df['risk_score'] = pd.to_numeric(df['risk_level'], errors='coerce').fillna(3)
for col in ['returns_1yr','returns_3yr','returns_5yr','sd','beta','sharpe','alpha']:
    df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)

features = ['risk_score','returns_1yr','returns_3yr','returns_5yr','sd','sharpe']
X = df[features].fillna(0)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("=== DATASET STATISTICS ===")
print(f"Total funds: {len(df)}")
print(f"Features used: {features}")
print()
print("Risk Level Distribution:")
print(df['risk_level'].value_counts().sort_index())
print()
print("Category Distribution:")
print(df['category'].value_counts())
print()
print("Rating Distribution (1-5):")
print(df['rating'].value_counts().sort_index())

# ---- Feature statistics ----
print()
print("=== FEATURE STATISTICS ===")
print(df[features].describe().round(2).to_string())

# ---- KNN Evaluation ----
print()
print("=== KNN MODEL EVALUATION ===")

model_full = NearestNeighbors(n_neighbors=11, metric='euclidean')
model_full.fit(X_scaled)
distances_all, indices_all = model_full.kneighbors(X_scaled)

# 1. Avg intra-list distance (diversity)
avg_neighbor_dist = distances_all[:, 1:].mean(axis=1).mean()
print(f"Avg intra-list distance (diversity): {avg_neighbor_dist:.4f}")

# 2. Risk-alignment accuracy
risk_labels = df['risk_score'].values
risk_match_rates = []
for i, idxs in enumerate(indices_all):
    neighbors = idxs[1:]  # exclude self
    same_risk = np.sum(risk_labels[neighbors] == risk_labels[i])
    risk_match_rates.append(same_risk / len(neighbors))
avg_risk_alignment = np.mean(risk_match_rates)
print(f"Risk-level neighbor alignment: {avg_risk_alignment*100:.2f}%")

# 3. Leave-One-Out: Risk class prediction accuracy
correct_risk = 0
for i in range(len(X_scaled)):
    q = X_scaled[i].reshape(1, -1)
    dists, idxs = model_full.kneighbors(q)
    neighbors = [idx for idx in idxs[0] if idx != i][:10]
    pred_risk = Counter(risk_labels[neighbors].tolist()).most_common(1)[0][0]
    if pred_risk == risk_labels[i]:
        correct_risk += 1
loo_acc = correct_risk / len(X_scaled)
print(f"LOO Risk-Class Accuracy: {loo_acc*100:.2f}%")

# 4. Catalog Coverage
all_recommended = set()
for idxs in indices_all:
    all_recommended.update(idxs[1:])
coverage = len(all_recommended) / len(df)
print(f"Catalog Coverage: {coverage*100:.2f}% ({len(all_recommended)}/{len(df)} funds)")

# 5. Return & quality metrics
ret1 = df['returns_1yr'].mean()
ret3 = df['returns_3yr'].mean()
ret5 = df['returns_5yr'].mean()
sharpe_mean = df['sharpe'].mean()
ret1_std = df['returns_1yr'].std()

print()
print("=== RETURN & QUALITY METRICS ===")
print(f"Mean 1yr Return  : {ret1:.2f}%")
print(f"Mean 3yr Return  : {ret3:.2f}%")
print(f"Mean 5yr Return  : {ret5:.2f}%")
print(f"Mean Sharpe Ratio: {sharpe_mean:.4f}")
print(f"Std Dev 1yr Ret  : {ret1_std:.2f}%")

# 6. K selection
print()
print("=== K SELECTION ANALYSIS (LOO Risk Accuracy vs K) ===")
for k in [3, 5, 7, 10, 15, 20]:
    m = NearestNeighbors(n_neighbors=k+1, metric='euclidean')
    m.fit(X_scaled)
    _, idxs_k = m.kneighbors(X_scaled)
    correct = 0
    for i, row in enumerate(idxs_k):
        neighbors = [idx for idx in row if idx != i][:k]
        pred = Counter(risk_labels[neighbors].tolist()).most_common(1)[0][0]
        if pred == risk_labels[i]:
            correct += 1
    print(f"  k={k:2d}: {correct/len(X_scaled)*100:.2f}%")

# 7. Per risk-class breakdown
print()
print("=== PER RISK-CLASS ACCURACY (LOO, k=10) ===")
risk_classes = sorted(df['risk_score'].unique())
class_totals = Counter(risk_labels.tolist())
class_correct = Counter()
for i in range(len(X_scaled)):
    q = X_scaled[i].reshape(1, -1)
    _, idxs = model_full.kneighbors(q)
    neighbors = [idx for idx in idxs[0] if idx != i][:10]
    pred = Counter(risk_labels[neighbors].tolist()).most_common(1)[0][0]
    if pred == risk_labels[i]:
        class_correct[risk_labels[i]] += 1
for rc in risk_classes:
    total = class_totals[rc]
    correct_c = class_correct.get(rc, 0)
    print(f"  Risk {int(rc)}: {correct_c}/{total} = {correct_c/total*100:.1f}%")
