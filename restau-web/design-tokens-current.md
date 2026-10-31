# restau-web 現状トークン草案

このファイルは既存コード（`tailwind.config.js` / `src/index.css` / 各コンポーネント）から抜き出した**現状のトークン・慣習の棚卸し**である。

- 汎用ルールは [`design-system.md`](./design-system.md) を参照する。
- ここは「今どうなっているか」の記録。刷新時の移行元・再利用判断の材料にする。
- 値はコード上の実測。未統一・重複・未使用も含めて残す。

最終更新の根拠ソース：

| 領域 | 主な根拠 |
|------|----------|
| 色・BP | `tailwind.config.js` |
| フォント・ユーティリティ | `src/index.css` |
| 余白・影・角丸の使われ方 | `Navbar` / `Home` / `About` / `Dishes` / `Menu` / `Review` / `Footer` / layouts |

---

## 1. 色（Color）

### 1.1 Tailwind theme に定義済み

| トークン名 | 値 | 主な用途（コード上） |
|------------|-----|----------------------|
| `brightColor` | `#FF07AD` | アクセント、ボタン枠/塗り、ホバー文字、星評価、フッター強調 |
| `backgroundColor` | `#b7bca9` | セージ系背景、ヒーロー見出し文字、Aboutパネル背景 |
| `lightText` | `#959595` | カード枠線、レビュー引用テキスト |

定義場所：`tailwind.config.js` → `theme.extend.colors`

### 1.2 ハードコード・ユーティリティ直書き

| 値 / クラス | 出現箇所 | 備考 |
|-------------|----------|------|
| `bg-white` / `text-white` | ナビ、カード、ボタンホバー | 表面・反転テキストとして多用 |
| `bg-black` / `text-black`（暗黙） | モバイルメニュー、フッター | セマンティック名なし |
| `border-gray-300` | ナビドロップダウン | theme未登録 |
| `#ff07ad` | `.co-egg`（`index.css`） | `brightColor` と同色だが変数未使用 |
| `#888` | `App.css`（Vite雛形残り） | 本番UIではほぼ未使用の可能性 |

### 1.3 セマンティック案（刷新時のマッピング候補）

現状名を壊さず役割を付ける場合の草案：

| 役割案 | 現状トークン / 値 |
|--------|-------------------|
| `--color-accent` / primary | `brightColor` `#FF07AD` |
| `--color-surface-muted` / brand-surface | `backgroundColor` `#b7bca9` |
| `--color-text-muted` | `lightText` `#959595` |
| `--color-surface` | `white` |
| `--color-ink` / inverse | `black` |
| `--color-border-subtle` | `gray-300`（要トークン化） |

注意：ピンク（`#FF07AD`）×セージ（`#b7bca9`）×グレー本文のコントラストは、刷新時に WCAG を別途確認する。

---

## 2. フォント（Typography）

### 2.1 読み込み状況

| ファミリー | 読み込み方法 | 現状の利用 |
|------------|--------------|------------|
| **Termina Demi** | `@font-face` → `Termina-Demi.woff2`（weight 600） | body / `.font-body` / `.font-hedding` の実体 |
| **Cedarville Cursive** | Google Fonts `@import` | `.font-logo`（ロゴ） |
| **Sawarabi Mincho** | Google Fonts `@import` | `.letter-vertical`（縦書き） |
| **Poppins** | Google Fonts `@import` | **コード上ほぼ未使用**（読み込みのみ） |

### 2.2 アセットにあるが未登録の Termina ウェイト

`src/assets/fonts/` に存在するが `@font-face` 未定義：

- Thin / ExtraLight / Light / Regular / Medium / Bold / Heavy / Black

→ 刷新時は必要なウェイトだけ登録し、未使用ファイルは整理候補。

### 2.3 役割クラス（現状）

| クラス | font-family | その他 | 用途 |
|--------|-------------|--------|------|
| （body） | Termina Demi | — | 全体既定 |
| `.font-body` | Termina Demi | `font-size: medium` | ボタン等 |
| `.font-hedding` | Termina Demi | `font-weight: 600` | 見出し（typo: hedding） |
| `.font-logo` | Cedarville Cursive | `font-weight: 400` | ロゴ「FoodieWeb」 |
| `.letter-vertical` | Sawarabi Mincho | `writing-mode: vertical-rl` | 縦書き装飾 |

### 2.4 サイズの使われ方（Tailwind / カスタム）

| パターン | 出現例 | 用途 |
|----------|--------|------|
| `text-sm` | Footer 説明文 | 補足 |
| `text-lg` | DishesCard 価格 | 中間 |
| `text-xl` | Footer 見出し、About 本文見出し、カードタイトル | 小見出し |
| `text-2xl` | ナビリンク、ヒーローリード、モバイルメニュー | ナビ・リード |
| `text-3xl` | ロゴ、OrderButton、レビュー名/引用 | 強調 |
| `text-5xl` | セクション見出し（Dishes / Menu / Review / About） | セクションタイトル |
| `text-6xl` + `sm:text-5xl` | Home ヒーロー | ヒーロー（狭い画面で一段下げる） |
| `.head-text` | `text-3xl` / `sm:text-5xl` + `font-semibold` | ユーティリティ定義あり（Homeでも併用） |

行間：`.head-text` のみ `sm:leading-snug`。本文の `line-height` トークンは未整備。

---

## 3. 余白・レイアウト（Spacing / Layout）

### 3.1 ページ左右ガター（最頻出パターン）

| 画面幅 | クラス | おおよそ |
|--------|--------|----------|
| 既定（モバイル） | `px-5` | 1.25rem / 20px |
| `md` 以上（一部） | `md:px-25`（Navbar） | **Tailwind既定に `px-25` は無い** → 無効 or 意図不明の可能性 |
| `lg` 以上 | `lg:px-32` | 8rem / 128px |

出現：`Home` / `About` / `Dishes` / `Menu` / `Review` / `Footer` / `Navbar`

→ `design-system.md` の `--page-gutter`（1rem → 2rem → 2.5rem）とは**大きく異なる**。現状はモバイル 20px・デスクトップ 128px の二段が主。

### 3.2 セクション縦方向

| パターン | 出現 | おおよそ |
|----------|------|----------|
| `min-h-screen` | Home / About / Dishes / Menu / Review | セクションを画面高で区切る |
| `pt-20` / `pt-24` / `pt-40` | Dishes / Menu / Review | 固定ヘッダー避け |
| `py-10` / `py-20` / `md:py-32` | Menu / About / Review | セクション内余白 |
| `my-60` / `mb-20` | About 見出し周り | 大きい縦マージン（15rem級） |
| `gap-5` / `gap-8` | カード列・ナビ | 1.25rem / 2rem |
| `space-y-4` / `space-y-5` | カード内・Home | 1rem / 1.25rem |
| `p-5` | カード・ナビ内 | 1.25rem |
| `px-6 py-1` | ボタン類 | 横 1.5rem・縦 0.25rem（縦が浅い） |
| `py-10 px-10` | ヒーロー吹き出し | 2.5rem |

### 3.3 コンテナ幅

| 定義 | 値 | 備考 |
|------|-----|------|
| `.max-container` | `max-w-5xl`（64rem / 1024px）+ 中央寄せ | `index.css` にあるが主要セクションではほぼ未使用 |
| `App.css` の `#root` | `max-width: 1280px` | Vite雛形の残り。アプリ構造と重複しうる |

現状のセクションは「全幅 + `lg:px-32`」型が主で、共通 `.container` トークンは未確立。

---

## 4. ブレークポイント（Breakpoints）

### 4.1 カスタム（`tailwind.config.js`）

| 名前 | 値 | 備考 |
|------|-----|------|
| `sx` | `375px` | 独自。Home の `sx:bottom-20` のみ確認 |
| `sm` | `400px` | **Tailwind既定の sm(640px) を上書き** |

### 4.2 Tailwind 既定（上書きされていないもの）

| 名前 | 値 |
|------|-----|
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1536px` |

### 4.3 コード上の使い分け（実態）

| BP | よくある用途 |
|----|----------------|
| `sx` / `sm` | ヒーロー位置・見出しサイズ微調整 |
| `md` | ナビ表示切替、カード横並び、フッター列 |
| `lg` | ページ左右 `px-32`、About 横並び、ヒーロー位置 |
| `xl` | ボタン装飾 `.co-egg` の非表示（`xl:hidden md:hidden`） |

### 4.4 `design-system.md` との差分

| design-system 例 | 現状 restau-web |
|------------------|-----------------|
| 〜479 / 480〜767 / 768〜1023 / 1024〜 | `sx:375` / `sm:400`（既定sm破壊）/ `md:768` / `lg:1024` |
| rem 指定（48rem / 64rem） | px 指定の Tailwind screens |

刷新時の選択肢：

1. **現状維持** — `sx`/`sm` の意図を文書化し、`sm:400` 上書きを明示する  
2. **汎用標準へ寄せる** — `sm` を既定に戻し、必要な幅だけ `screens` に追加する  

---

## 5. 角丸・影・境界・その他

### 5.1 Radius

| クラス | 用途 |
|--------|------|
| `rounded` | OrderButton |
| `rounded-lg` | カード、ヒーローパネル、ドロップダウン |
| `rounded-xl` | 料理カード画像 |
| `rounded-full` | レビューアバター |
| 卵型 `border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%` | `.egg` / `.egg-big` / `.co-egg`（ブランド装飾） |

### 5.2 Shadow

| 値 | 用途 |
|----|------|
| `shadow-[0_3px_10px_rgb(0,0,0,0.2)]` | 固定ヘッダー |
| `shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]` | カード、ヒーローパネル、Aboutパネル |

→ 2種が併存。トークン化候補：`--shadow-header` / `--shadow-card`。

### 5.3 Border

| パターン | 用途 |
|----------|------|
| `border-2 border-brightColor` | 全ボタン |
| `border-2 border-lightText`（`md:border-none`） | カード（モバイルのみ枠） |
| `border border-gray-300` | ドロップダウン |

### 5.4 Motion / インタラクション

| パターン | 用途 |
|----------|------|
| `transition-all` | リンク・ボタンホバー |
| `transition-transform duration-300` | モバイルメニュー開閉 |
| `hover:text-brightColor` / `hover:bg-brightColor` | 共通ホバー |
| `backdrop-blur-md` | ヒーロー文言パネル |
| `opacity-85` | About パネル |

`prefers-reduced-motion` はコンポーネント側では未対応（`App.css` 雛形のみ）。

### 5.5 z-index（現状の散在）

| 値 | 箇所 |
|----|------|
| `z-40` / コメント上 `z-100`（無効クラス） | Navbar |
| `z-10` | Home / About |
| `z-0` | Review |
| `z-1` | ナビ内 dropdown 親 |

→ スケール未整備。

---

## 6. コンポーネント慣習（トークン化の種）

| 部品 | 現状の見た目ルール |
|------|-------------------|
| **Button / DishButton** | 枠2pxアクセント、透明地、ホバーで塗りつぶし＋白文字、`px-6 py-1` |
| **OrderButton** | 同上だが初期塗りつぶし、白文字、`text-3xl`、`rounded` |
| **DishesCard / ReviewCard** | 白地、`p-5`、`rounded-lg`、共通カード影、モバイルで `border-lightText` |
| **Section title** | `font-hedding text-5xl font-semibold text-center` + 大きめ `pt-*` |
| **Page shell** | `min-h-screen` + `lg:px-32 px-5` |

---

## 7. 画像・フォントアセット（流用メモ）

### フォントファイル（ローカル）

- `src/assets/fonts/Termina-*.woff2`（9ウェイト）— 使用中は Demi のみ

### コードが参照する画像パス（リポジトリ内検索時点）

- `src/assets/img/hero1.jpg`（Home）
- `src/assets/img/about.jpg`（About）
- 各カード用画像（`Dishes` / `Menu` / `Review` の import）

※ 画像バイナリがワークスペースに見えない場合は `.gitignore` や未コミットの可能性あり。刷新時はパスと実ファイルの対応を先に確認する。

### Google Fonts

- Cedarville Cursive / Sawarabi Mincho / Poppins（Poppins は削除候補）

---

## 8. 汎用 `design-system.md` への接続メモ

| 汎用標準 | 現状 | 刷新時の扱い案 |
|----------|------|----------------|
| `--space-*`（4〜96px） | Tailwind の `p-5` / `px-32` 等が散在 | まずガターとセクション余白だけトークン化 |
| `--page-gutter` | `px-5` / `lg:px-32` | 現状値を正式トークンにするか、標準へ段階移行 |
| `--content-max: 75rem` | 実質フル幅 + 横padding | `.max-container` 活用か廃止を決める |
| 文字サイズ rem トークン | `text-*` ユーティリティ直書き | セクション見出し / ヒーローだけ先に集約 |
| BP 例（480/768/…） | `sm:400` 上書き | **方針決定が最優先**（他トークンより先） |
| CSS変数例 | ほぼ未使用（Tailwind theme 中心） | `theme.extend` に寄せるか、`:root` + `@apply` の二段にする |

---

## 9. 既知の不整合・負債（棚卸し）

1. **`sm: "400px"` が Tailwind 既定を破壊** — 一般的な `sm:` の意味とズレる。
2. **`md:px-25`** — 標準スペーシングに無い値の可能性。
3. **`.font-hedding` 誤字** — リネーム時は一括置換が必要。
4. **`brightColor` と `#ff07ad` の二重管理**（`.co-egg`）。
5. **Poppins 読み込みのみ** — 未使用なら削除で転送量削減。
6. **Termina 多ウェイト未使用** — アセット肥大。
7. **影・ガター・ボタン縦padding のばらつき** — コンポーネント規約未整備の結果。
8. **`App.css` 雛形スタイル** — 本番トークンから切り離して整理候補。

---

## 10. 次アクション（この草案の使い方）

1. このファイルを「現状の正」として、捨てる値 / 残す値 / リネームする値に印を付ける。  
2. 残す色・フォント・ガター・BPだけを、刷新用の `theme.extend`（または `:root`）に昇格させる。  
3. 実装時の判断は常に **`design-system.md`（汎用）→ 本ファイル（現状）→ 画面固有の例外** の順で行う。

運用一文：  
**汎用標準で「どう書くか」を決め、この草案で「今何があるか」を決め、差分だけをデザイン刷新の作業範囲にする。**
