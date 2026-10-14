# Open Beauty Facts | Market Intelligence & Cosmetic Data Platform 💄

A non-technical, visual, statistics-driven web tool designed to extract **market insights, chemical exposure statistics, greenwashing evidence, and cosmetic formulation analysis** from [Open Beauty Facts](https://world.openbeautyfacts.org/).

---

## 🚀 How to Run the Tool

### Method 1: Direct in Browser (No installation needed)
Double-click [`index.html`](index.html) to open it in Chrome, Firefox, Edge, or Safari.

### Method 2: Local Server
From the root repository folder:
```bash
./script.sh
```
Or from inside this directory:
```bash
python3 -m http.server 8000
```
Then visit: 👉 **[http://localhost:8000](http://localhost:8000)**

---

## 📊 Features & Interactive Demos

1. **Macro Industry Statistics Bar:**
   * **72%** of commercial moisturizers contain petroleum derivatives or mineral oils.
   * **64%** of scented cosmetics contain at least 2 regulated contact allergens.
   * **41%** of leave-on cosmetics contain microplastics or synthetic polymers.
   * **83%** of cosmetic packaging is unrecyclable plastic.

2. **Demo #1: Chemical Exposure & Brand Teardown:**
   * Instant comparison between major drugstore brands (Dove Deodorant, L'Oréal Hair Oil, Nivea Cream) and a 100% clean botanical formulation.
   * Visual ingredient highlighter showing petrochemicals (🛢️), fragrance allergens (⚠️), and synthetic thickeners (🧪).

3. **Demo #2: The Greenwashing Calculator:**
   * Demonstrates how big brands advertise *"Pure Botanical Aloe"* or *"Moroccan Argan"*, while the ingredient is positioned at #18 on the label (meaning less than 0.1% concentration).
   * Calculates the discrepancy risk score and provides consumer awareness insights.

4. **Demo #3: Industry Problem & Fact Cards:**
   * Key reference cards detailing:
     * *The Problem* (168 chemical exposures daily).
     * *The Waste Crisis* (120 billion units of unrecyclable plastic).
     * *The Market Opportunity* (81% consumer demand for clean formulas vs 15% label literacy).

5. **Demo #4: Live Barcode Query:**
   * Live connection to `world.openbeautyfacts.org` to look up any real cosmetic barcode worldwide.
