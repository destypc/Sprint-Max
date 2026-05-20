/* ================================================================
   SPRINTMAX — Loja de Esportes | app.js
   ================================================================ */
"use strict";

/* ── PRODUTOS (40 itens) ───────────────────────────────────── */
const PRODUCTS = [
  // CORRIDA
  {
    id: 1,
    name: "Tenis AeroRun Pro",
    brand: "SprintMax",
    cat: "Corrida",
    price: 389.9,
    oldPrice: 499.9,
    badge: "novo",
    stars: 5,
    reviews: 124,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 3,
    name: "Camiseta Dry-Fit Ultra",
    brand: "SprintMax",
    cat: "Corrida",
    price: 89.9,
    oldPrice: null,
    badge: "destaque",
    stars: 5,
    reviews: 67,
    img: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80",
  },
  {
    id: 7,
    name: "Garrafa Thermo 750ml",
    brand: "HydroMax",
    cat: "Corrida",
    price: 59.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 92,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 13,
    name: "Tenis TrailBlazer X2",
    brand: "New Balance",
    cat: "Corrida",
    price: 449.9,
    oldPrice: 549.9,
    badge: "oferta",
    stars: 5,
    reviews: 81,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80",
  },
  {
    id: 14,
    name: "Meia Compressao Pro",
    brand: "SprintMax",
    cat: "Corrida",
    price: 39.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 55,
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&q=80",
  },
  {
    id: 15,
    name: "Bone Running UV",
    brand: "SprintMax",
    cat: "Corrida",
    price: 49.9,
    oldPrice: 69.9,
    badge: "oferta",
    stars: 4,
    reviews: 38,
    img: "https://images.unsplash.com/photo-1624038761342-f81efb97e1de?w=500&q=80",
  },
  {
    id: 16,
    name: "GPS SportWatch Pro",
    brand: "Garmin",
    cat: "Corrida",
    price: 899.9,
    oldPrice: 1199.9,
    badge: "destaque",
    stars: 5,
    reviews: 43,
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80",
  },
  {
    id: 17,
    name: "Shorts Running Elite",
    brand: "Under Armour",
    cat: "Corrida",
    price: 99.9,
    oldPrice: 129.9,
    badge: "oferta",
    stars: 5,
    reviews: 61,
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80",
  },
  // FUTEBOL
  {
    id: 2,
    name: "Bola Campo Pro X",
    brand: "Penalty",
    cat: "Futebol",
    price: 129.9,
    oldPrice: 179.9,
    badge: "oferta",
    stars: 4,
    reviews: 88,
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
  },
  {
    id: 9,
    name: "Bermuda Comprida Dry",
    brand: "SprintMax",
    cat: "Futebol",
    price: 69.9,
    oldPrice: 89.9,
    badge: "oferta",
    stars: 4,
    reviews: 34,
    img: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=500&q=80",
  },
  {
    id: 12,
    name: "Chuteira Society Pro",
    brand: "Adidas",
    cat: "Futebol",
    price: 199.9,
    oldPrice: 249.9,
    badge: "novo",
    stars: 5,
    reviews: 47,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
  },
  {
    id: 18,
    name: "Chuteira Campo Master",
    brand: "Nike",
    cat: "Futebol",
    price: 259.9,
    oldPrice: 329.9,
    badge: "top",
    stars: 5,
    reviews: 72,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  },
  {
    id: 19,
    name: "Caneleira Pro Guard",
    brand: "Penalty",
    cat: "Futebol",
    price: 49.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 29,
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80",
  },
  {
    id: 20,
    name: "Luva Goleiro Ultra",
    brand: "Adidas",
    cat: "Futebol",
    price: 119.9,
    oldPrice: 159.9,
    badge: "destaque",
    stars: 5,
    reviews: 51,
    img: "https://images.unsplash.com/photo-1572982053914-1e4b8843b2ef?w=500&q=80",
  },
  {
    id: 21,
    name: "Camiseta Futebol Dry",
    brand: "SprintMax",
    cat: "Futebol",
    price: 79.9,
    oldPrice: 99.9,
    badge: "oferta",
    stars: 4,
    reviews: 44,
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80",
  },
  // ACADEMIA
  {
    id: 4,
    name: "Kit Halteres 10kg",
    brand: "IronFit",
    cat: "Academia",
    price: 219.9,
    oldPrice: 280.0,
    badge: "oferta",
    stars: 4,
    reviews: 53,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
  },
  {
    id: 8,
    name: "Luva de Boxe 14oz",
    brand: "Everlast",
    cat: "Academia",
    price: 189.9,
    oldPrice: 240.0,
    badge: "oferta",
    stars: 4,
    reviews: 78,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
  },
  {
    id: 22,
    name: "Corda de Pular Pro",
    brand: "IronFit",
    cat: "Academia",
    price: 59.9,
    oldPrice: null,
    badge: "novo",
    stars: 5,
    reviews: 66,
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=500&q=80",
  },
  {
    id: 23,
    name: "Kit Faixa Elastica 3pcs",
    brand: "SprintMax",
    cat: "Academia",
    price: 79.9,
    oldPrice: 99.9,
    badge: "oferta",
    stars: 4,
    reviews: 48,
    img: "https://images.unsplash.com/photo-1598971861713-54ad16a7e72e?w=500&q=80",
  },
  {
    id: 24,
    name: "Banco Supino Ajustavel",
    brand: "IronFit",
    cat: "Academia",
    price: 499.9,
    oldPrice: 649.9,
    badge: "destaque",
    stars: 5,
    reviews: 32,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
  },
  {
    id: 25,
    name: "Anilha Borracha 5kg",
    brand: "IronFit",
    cat: "Academia",
    price: 89.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 27,
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80",
  },
  {
    id: 26,
    name: "Esteira Dobravel Home",
    brand: "SportHome",
    cat: "Academia",
    price: 1899.9,
    oldPrice: 2499.9,
    badge: "top",
    stars: 5,
    reviews: 18,
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
  },
  {
    id: 27,
    name: "Colete Lastrado 10kg",
    brand: "IronFit",
    cat: "Academia",
    price: 149.9,
    oldPrice: 189.9,
    badge: "oferta",
    stars: 4,
    reviews: 35,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
  },
  // NATACAO
  {
    id: 5,
    name: "Oculos Aqua Vision",
    brand: "Speedo",
    cat: "Natacao",
    price: 74.9,
    oldPrice: null,
    badge: "novo",
    stars: 5,
    reviews: 41,
    img: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&q=80",
  },
  {
    id: 28,
    name: "Touca Silicone Pro",
    brand: "Speedo",
    cat: "Natacao",
    price: 39.9,
    oldPrice: null,
    badge: "novo",
    stars: 5,
    reviews: 63,
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    id: 29,
    name: "Maio Competicao Feminino",
    brand: "Speedo",
    cat: "Natacao",
    price: 159.9,
    oldPrice: 199.9,
    badge: "destaque",
    stars: 4,
    reviews: 29,
    img: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&q=80",
  },
  {
    id: 30,
    name: "Palmar Training",
    brand: "Speedo",
    cat: "Natacao",
    price: 49.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 22,
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&q=80",
  },
  {
    id: 31,
    name: "Prancha de Natacao",
    brand: "Speedo",
    cat: "Natacao",
    price: 34.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 17,
    img: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&q=80",
  },
  // CICLISMO
  {
    id: 10,
    name: "Capacete Ciclismo Pro",
    brand: "Trek",
    cat: "Ciclismo",
    price: 279.9,
    oldPrice: 349.9,
    badge: "top",
    stars: 5,
    reviews: 19,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
  },
  {
    id: 32,
    name: "Luva Ciclismo Gel",
    brand: "Trek",
    cat: "Ciclismo",
    price: 69.9,
    oldPrice: 89.9,
    badge: "oferta",
    stars: 4,
    reviews: 33,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
  },
  {
    id: 33,
    name: "Camisa Ciclismo UV50+",
    brand: "SprintMax",
    cat: "Ciclismo",
    price: 129.9,
    oldPrice: 169.9,
    badge: "novo",
    stars: 5,
    reviews: 24,
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=500&q=80",
  },
  {
    id: 34,
    name: "Squeeze Bike 700ml",
    brand: "HydroMax",
    cat: "Ciclismo",
    price: 29.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 15,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
  },
  {
    id: 35,
    name: "Suporte Celular Bike",
    brand: "Trek",
    cat: "Ciclismo",
    price: 54.9,
    oldPrice: 74.9,
    badge: "oferta",
    stars: 4,
    reviews: 28,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
  },
  // BASQUETE
  {
    id: 11,
    name: "Tenis de Basquete Air",
    brand: "Nike",
    cat: "Basquete",
    price: 429.9,
    oldPrice: 519.9,
    badge: "destaque",
    stars: 5,
    reviews: 62,
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80",
  },
  {
    id: 36,
    name: "Bola Basquete Oficial",
    brand: "Spalding",
    cat: "Basquete",
    price: 189.9,
    oldPrice: 239.9,
    badge: "oferta",
    stars: 5,
    reviews: 39,
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&q=80",
  },
  {
    id: 37,
    name: "Camiseta Basquete Pro",
    brand: "Nike",
    cat: "Basquete",
    price: 149.9,
    oldPrice: 189.9,
    badge: "top",
    stars: 5,
    reviews: 31,
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80",
  },
  // TENIS DE QUADRA
  {
    id: 6,
    name: "Raquete Control 300",
    brand: "Wilson",
    cat: "Tenis",
    price: 349.9,
    oldPrice: 420.0,
    badge: "destaque",
    stars: 5,
    reviews: 56,
    img: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=500&q=80",
  },
  {
    id: 38,
    name: "Bola de Tenis Pack 4",
    brand: "Wilson",
    cat: "Tenis",
    price: 49.9,
    oldPrice: null,
    badge: "novo",
    stars: 4,
    reviews: 44,
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&q=80",
  },
  {
    id: 39,
    name: "Overgrip Wilson Pro",
    brand: "Wilson",
    cat: "Tenis",
    price: 29.9,
    oldPrice: null,
    badge: "novo",
    stars: 5,
    reviews: 67,
    img: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=500&q=80",
  },
  {
    id: 40,
    name: "Bolsa Raquete 2 Bolsos",
    brand: "Wilson",
    cat: "Tenis",
    price: 119.9,
    oldPrice: 149.9,
    badge: "oferta",
    stars: 4,
    reviews: 21,
    img: "https://images.unsplash.com/photo-1623874514711-0f321325f318?w=500&q=80",
  },
];

// Pagina inicial de produtos
const PAGE_SIZE = 8;
let shownCount = PAGE_SIZE;
let activeFilter = "all";

// Estado do carrinho e wishlist
let cart = JSON.parse(localStorage.getItem("sm_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("sm_wishlist") || "[]");

/* ── UTEIS ──────────────────────────────────────────────────── */
function fmt(v) {
  return "R$ " + v.toFixed(2).replace(".", ",");
}
function saveCart() {
  localStorage.setItem("sm_cart", JSON.stringify(cart));
}
function saveWishlist() {
  localStorage.setItem("sm_wishlist", JSON.stringify(wishlist));
}

function catFilter(cat) {
  if (cat === "all") return PRODUCTS;
  // normaliza acentos
  const norm = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  return PRODUCTS.filter((p) => norm(p.cat) === norm(cat));
}

/* ── RENDER PRODUCTS ─────────────────────────────────────────── */
function renderProducts(filter, count) {
  const grid = document.getElementById("productsGrid");
  const btn = document.querySelector(".btn-load-more");
  if (!grid) return;

  const list = catFilter(filter);
  const slice = list.slice(0, count || PAGE_SIZE);

  const BADGE_CLS = {
    novo: "badge-novo",
    oferta: "badge-oferta",
    destaque: "badge-destaque",
    top: "badge-top",
  };

  grid.innerHTML = slice
    .map((p) => {
      const stars = "★".repeat(p.stars) + "☆".repeat(5 - p.stars);
      const bCls = BADGE_CLS[p.badge] || "";
      const oldPrc = p.oldPrice
        ? `<span class="price-was">${fmt(p.oldPrice)}</span>`
        : "";
      const wished = wishlist.includes(p.id);
      return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <span class="product-badge ${bCls}">${p.badge}</span>
        <div class="product-actions">
          <button class="product-action-btn ${wished ? "wishlisted" : ""}"
            onclick="toggleWishlist(${p.id},this)" title="Lista de desejos">${wished ? "❤️" : "🤍"}</button>
          <button class="product-action-btn"
            onclick="quickView(${p.id})" title="Ver detalhes">🔍</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.cat}</span>
        <div class="product-name">${p.name}</div>
        <div class="product-brand">${p.brand}</div>
        <div class="product-stars">${stars} <small>(${p.reviews})</small></div>
        <div class="product-price">
          <span class="price-now">${fmt(p.price)}</span>${oldPrc}
        </div>
        <button class="btn-add-to-cart"
          onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
      </div>
    </div>`;
    })
    .join("");

  // botao de load more
  if (btn) {
    if (slice.length < list.length) {
      btn.style.display = "inline-flex";
      btn.textContent = `Ver mais ${list.length - slice.length} produtos →`;
    } else {
      btn.style.display = list.length > PAGE_SIZE ? "inline-flex" : "none";
      btn.textContent = "Mostrar menos ↑";
    }
  }

  // reaplica animacoes
  requestAnimationFrame(() => {
    grid.querySelectorAll(".product-card").forEach((el, i) => {
      el.style.cssText += `opacity:0;transform:translateY(20px);transition:opacity .4s ${i * 0.05}s ease,transform .4s ${i * 0.05}s ease`;
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  });
}

/* ── FILTER TABS ─────────────────────────────────────────────── */
function setFilter(cat, scrollTo) {
  activeFilter = cat;
  shownCount = PAGE_SIZE;
  const _norm = (s) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  document
    .querySelectorAll(".filter-tab")
    .forEach((b) =>
      b.classList.toggle("active", _norm(b.dataset.filter) === _norm(cat)),
    );
  renderProducts(cat, PAGE_SIZE);
  if (scrollTo !== false)
    document.getElementById("ofertas").scrollIntoView({ behavior: "smooth" });
}

function initFilterTabs() {
  document.querySelectorAll(".filter-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      setFilter(btn.dataset.filter, false);
    });
  });

  // dropdown items do nav
  document.querySelectorAll(".dropdown-item").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const txt = a.textContent.trim().replace(/^[^\s]+\s/, ""); // remove emoji
      setFilter(txt.trim());
    });
  });
}

function initLoadMore() {
  const btn = document.querySelector(".btn-load-more");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const list = catFilter(activeFilter);
    if (shownCount >= list.length) {
      shownCount = PAGE_SIZE;
    } else {
      shownCount = Math.min(shownCount + PAGE_SIZE, list.length);
    }
    renderProducts(activeFilter, shownCount);
  });
}

/* ── CART ────────────────────────────────────────────────────── */
function addToCart(idOrName, priceArg, imgArg, catArg) {
  let p;
  if (typeof idOrName === "number") {
    p = PRODUCTS.find((x) => x.id === idOrName);
    if (!p) return;
  } else {
    // legacy: called with strings (flash sale buttons)
    p = { name: idOrName, price: priceArg, img: imgArg, cat: catArg || "" };
  }
  const existing = cart.find((i) => i.name === p.name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      name: p.name,
      price: p.price,
      img: p.img,
      cat: p.cat || "",
      qty: 1,
    });
  }
  saveCart();
  updateCartUI();
  showToast(p.name, p.price, p.img || imgArg || "");
  openCart();
}

function removeFromCart(name) {
  cart = cart.filter((i) => i.name !== name);
  saveCart();
  updateCartUI();
}

function changeQty(name, delta) {
  const item = cart.find((i) => i.name === name);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const countEl = document.getElementById("cartCount");
  const itemCount = document.getElementById("cartItemCount");
  const itemsEl = document.getElementById("cartItems");
  const footerEl = document.getElementById("cartFooter");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  const shippingEl = document.getElementById("cartShipping");

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  if (countEl) {
    countEl.textContent = count;
    countEl.style.display = count > 0 ? "flex" : "none";
  }
  if (itemCount)
    itemCount.textContent = `(${count} ${count === 1 ? "item" : "itens"})`;

  if (itemsEl) {
    if (!cart.length) {
      itemsEl.innerHTML = `<div class="cart-empty">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p>Seu carrinho está vazio</p><span>Adicione produtos para continuar</span></div>`;
    } else {
      itemsEl.innerHTML = cart
        .map(
          (item) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}"/>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-cat">${item.cat}</div>
            <div class="cart-item-controls">
              <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty('${item.name}',-1)">−</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty('${item.name}',1)">+</button>
              </div>
              <span class="cart-item-price">${fmt(item.price * item.qty)}</span>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.name}')">Remover</button>
          </div>
        </div>`,
        )
        .join("");
    }
  }

  if (footerEl) footerEl.style.display = cart.length > 0 ? "flex" : "none";

  const frete = total > 0 && total < 299 ? 19.9 : 0;
  if (subtotalEl) subtotalEl.textContent = fmt(total);
  if (shippingEl) {
    shippingEl.textContent = frete > 0 ? fmt(frete) : "Grátis";
    shippingEl.className = frete > 0 ? "" : "free-tag";
  }
  if (totalEl) totalEl.textContent = fmt(total + frete);
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── CUPOM ───────────────────────────────────────────────────── */
const COUPONS = { SPRINT10: 0.1, FRETE0: 0, VIP20: 0.2 };
function applyCoupon() {
  const input = document.getElementById("couponInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (COUPONS[code] !== undefined) {
    showToastMsg(
      `✅ Cupom ${code} aplicado! ${(COUPONS[code] * 100).toFixed(0)}% de desconto`,
      "success",
    );
    input.value = "";
    input.placeholder = `${code} aplicado!`;
  } else {
    showToastMsg("❌ Cupom inválido ou expirado", "error");
  }
}

/* ── WISHLIST ─────────────────────────────────────────────────── */
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    if (btn) {
      btn.textContent = "❤️";
      btn.classList.add("wishlisted");
    }
    showToastMsg("❤️ Adicionado à lista de desejos!", "success");
  } else {
    wishlist.splice(idx, 1);
    if (btn) {
      btn.textContent = "🤍";
      btn.classList.remove("wishlisted");
    }
    showToastMsg("Removido da lista de desejos", "");
  }
  saveWishlist();
  const wc = document.getElementById("wishlistCount");
  if (wc) {
    wc.textContent = wishlist.length;
    wc.style.display = wishlist.length > 0 ? "flex" : "none";
  }
}

function openWishlistModal() {
  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));
  const body = items.length
    ? items
        .map(
          (p) => `
      <div style="display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.06)">
        <img src="${p.img}" style="width:70px;height:70px;border-radius:10px;object-fit:cover" alt="${p.name}">
        <div style="flex:1">
          <div style="font-weight:700;font-size:.95rem">${p.name}</div>
          <div style="color:#e8501a;font-weight:800;font-size:1rem;margin:.5rem 0">${fmt(p.price)}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button onclick="addToCart(${p.id});event.target.textContent='✓ Adicionado'" style="background:#e8501a;color:#fff;border:none;padding:9px 14px;border-radius:8px;font-weight:700;cursor:pointer;font-size:.8rem">Comprar</button>
          <button onclick="toggleWishlist(${p.id},null);this.closest('[data-item]').remove();updateWishlistCount()" data-item style="background:rgba(255,255,255,.08);color:#aaa;border:none;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:.75rem">Remover</button>
        </div>
      </div>`,
        )
        .join("")
    : '<div style="text-align:center;padding:48px;color:#888"><div style="font-size:3rem">🤍</div><p style="margin-top:12px">Nenhum favorito ainda</p></div>';

  showModal(
    `❤️ Lista de Desejos <span style="color:#888;font-weight:400;font-size:.9rem">(${items.length} itens)</span>`,
    `<div style="max-height:420px;overflow-y:auto">${body}</div>`,
  );
}
function updateWishlistCount() {
  const wc = document.getElementById("wishlistCount");
  if (wc) {
    wc.textContent = wishlist.length;
    wc.style.display = wishlist.length > 0 ? "flex" : "none";
  }
}

/* ── QUICK VIEW ───────────────────────────────────────────────── */
function quickView(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  const stars = "★".repeat(p.stars) + "☆".repeat(5 - p.stars);
  const oldPrc = p.oldPrice
    ? `<span style="text-decoration:line-through;color:#888;font-size:.9rem">${fmt(p.oldPrice)}</span>`
    : "";
  const discount = p.oldPrice
    ? `<span style="background:#e8501a;color:#fff;padding:3px 10px;border-radius:20px;font-size:.75rem;font-weight:700">${Math.round((1 - p.price / p.oldPrice) * 100)}% OFF</span>`
    : "";

  const html = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;max-width:680px">
      <img src="${p.img}" alt="${p.name}" style="width:100%;height:320px;object-fit:cover;border-radius:12px 0 0 12px">
      <div style="padding:28px;display:flex;flex-direction:column;gap:12px">
        <div style="font-size:.72rem;color:#e8501a;font-weight:700;text-transform:uppercase;letter-spacing:1px">${p.cat}</div>
        <h3 style="font-size:1.3rem;font-weight:800;line-height:1.2">${p.name}</h3>
        <div style="color:#888;font-size:.85rem">${p.brand}</div>
        <div style="color:#fbbf24">${stars} <span style="color:#888;font-size:.8rem">(${p.reviews} avaliações)</span></div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
          <span style="font-size:1.7rem;font-weight:800">${fmt(p.price)}</span>
          ${oldPrc} ${discount}
        </div>
        <div style="color:#aaa;font-size:.85rem;line-height:1.6">Produto de alta qualidade com tecnologia avançada para máxima performance esportiva.</div>
        <button onclick="addToCart(${p.id});closeModal()" style="background:#e8501a;color:#fff;padding:14px;border-radius:10px;font-size:.95rem;font-weight:700;cursor:pointer;border:none;margin-top:auto;transition:.2s" onmouseover="this.style.background='#c43d10'" onmouseout="this.style.background='#e8501a'">🛒 Adicionar ao Carrinho</button>
        <button onclick="toggleWishlist(${p.id},null)" style="background:rgba(255,255,255,.07);color:#ccc;padding:10px;border-radius:10px;font-size:.85rem;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,.1)">🤍 Lista de Desejos</button>
      </div>
    </div>`;
  showModal(null, html, true);
}

/* ── MODAL HELPER ─────────────────────────────────────────────── */
function showModal(title, body, noTitle) {
  let existing = document.getElementById("smModal");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "smModal";
  overlay.style.cssText =
    "position:fixed;inset:0;background:rgba(0,0,0,.82);z-index:6000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px)";

  const titleHtml = noTitle
    ? ""
    : `<div style="padding:20px 24px;border-bottom:1px solid rgba(255,255,255,.07);font-size:1.05rem;font-weight:700">${title || ""}</div>`;

  overlay.innerHTML = `
    <div style="background:#1a1a1a;border-radius:16px;max-width:720px;width:100%;max-height:90vh;overflow:auto;border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 64px rgba(0,0,0,.6);position:relative">
      ${titleHtml}
      <div style="padding:${noTitle ? "0" : "20px 24px"}">${body}</div>
      <button id="smModalClose" style="position:absolute;top:14px;right:14px;background:rgba(255,255,255,.1);color:#fff;border:none;border-radius:50%;width:34px;height:34px;font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center" onclick="closeModal()">✕</button>
    </div>`;

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.body.appendChild(overlay);
  document.body.style.overflow = "hidden";
}
function closeModal() {
  const m = document.getElementById("smModal");
  if (m) m.remove();
  document.body.style.overflow = "";
}

/* ── CHECKOUT ─────────────────────────────────────────────────── */
function openCheckout() {
  if (!cart.length) {
    showToastMsg("Seu carrinho está vazio!", "error");
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const frete = total >= 299 ? 0 : 19.9;

  const html = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
      <div>
        <h4 style="margin-bottom:16px;font-size:1rem;color:#e8501a">📦 Resumo do Pedido</h4>
        <div style="max-height:220px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
          ${cart
            .map(
              (i) => `
          <div style="display:flex;gap:10px;align-items:center">
            <img src="${i.img}" style="width:48px;height:48px;border-radius:8px;object-fit:cover">
            <div style="flex:1"><div style="font-size:.85rem;font-weight:600">${i.name}</div><div style="font-size:.75rem;color:#888">Qtd: ${i.qty}</div></div>
            <span style="font-weight:700;color:#e8501a;font-size:.9rem">${fmt(i.price * i.qty)}</span>
          </div>`,
            )
            .join("")}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,.08);padding-top:12px">
          <div style="display:flex;justify-content:space-between;font-size:.85rem;color:#aaa;margin-bottom:6px"><span>Subtotal</span><span>${fmt(total)}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:.85rem;color:#aaa;margin-bottom:10px"><span>Frete</span><span style="color:${frete ? "#fff" : "#22c55e"}">${frete ? fmt(frete) : "Grátis"}</span></div>
          <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800"><span>Total</span><span style="color:#e8501a">${fmt(total + frete)}</span></div>
        </div>
      </div>
      <div>
        <h4 style="margin-bottom:16px;font-size:1rem;color:#e8501a">💳 Dados de Pagamento</h4>
        <form onsubmit="finalizarPedido(event)" style="display:flex;flex-direction:column;gap:12px">
          <input required placeholder="Nome completo" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
          <input required type="email" placeholder="E-mail" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
          <input required placeholder="CEP" maxlength="9" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
          <select style="background:#2a2a2a;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
            <option>Cartão de crédito</option>
            <option>PIX (-5%)</option>
            <option>Boleto bancário</option>
          </select>
          <input placeholder="Número do cartão" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            <input placeholder="Validade MM/AA" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
            <input placeholder="CVV" maxlength="4" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:11px 14px;color:#fff;font-size:.9rem;outline:none">
          </div>
          <button type="submit" style="background:#e8501a;color:#fff;border:none;padding:14px;border-radius:10px;font-size:1rem;font-weight:700;cursor:pointer;margin-top:4px">🔒 Confirmar Pedido — ${fmt(total + frete)}</button>
        </form>
      </div>
    </div>`;
  showModal("🛒 Finalizar Compra", html);
}

function finalizarPedido(e) {
  e.preventDefault();
  closeModal();
  // Limpa carrinho
  cart = [];
  saveCart();
  updateCartUI();
  closeCart();
  setTimeout(() => {
    showModal(
      "🎉 Pedido Confirmado!",
      `
      <div style="text-align:center;padding:32px">
        <div style="font-size:4rem;margin-bottom:16px">✅</div>
        <h3 style="font-size:1.4rem;font-weight:800;margin-bottom:10px">Pedido realizado com sucesso!</h3>
        <p style="color:#aaa;font-size:.95rem;line-height:1.7">Você receberá uma confirmação por e-mail em breve.<br>Prazo de entrega: <strong style="color:#fff">3 a 7 dias úteis</strong>.</p>
        <p style="color:#e8501a;font-weight:700;margin-top:16px">Número do pedido: #${Math.floor(Math.random() * 900000 + 100000)}</p>
        <button onclick="closeModal()" style="margin-top:24px;background:#e8501a;color:#fff;border:none;padding:12px 32px;border-radius:50px;font-size:.95rem;font-weight:700;cursor:pointer">Continuar comprando</button>
      </div>`,
    );
  }, 200);
}

/* ── TOAST ────────────────────────────────────────────────────── */
function showToast(name, price, img) {
  const c = document.getElementById("toastContainer");
  if (!c) return;
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = `${img ? `<img src="${img}" alt="${name}">` : ""}
    <div class="toast-text"><strong>${name}</strong><span>Adicionado ao carrinho — ${fmt(price)}</span></div>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
function showToastMsg(msg, type) {
  const c = document.getElementById("toastContainer");
  if (!c) return;
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `<div class="toast-text"><strong>${msg}</strong></div>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ── COUNTDOWN ────────────────────────────────────────────────── */
function initCountdown() {
  const KEY = "sm_flash_end";
  let end = parseInt(localStorage.getItem(KEY) || "0");
  if (!end || end < Date.now()) {
    end = Date.now() + 8 * 3600e3 + 45 * 60e3;
    localStorage.setItem(KEY, end);
  }
  function tick() {
    const d = end - Date.now();
    if (d <= 0) {
      end = Date.now() + 8 * 3600e3;
      localStorage.setItem(KEY, end);
      return;
    }
    const pad = (n) => String(n).padStart(2, "0");
    const h = document.getElementById("cdHours");
    const m = document.getElementById("cdMinutes");
    const s = document.getElementById("cdSeconds");
    if (h) h.textContent = pad(Math.floor(d / 3600e3));
    if (m) m.textContent = pad(Math.floor((d % 3600e3) / 60e3));
    if (s) s.textContent = pad(Math.floor((d % 60e3) / 1e3));
  }
  tick();
  setInterval(tick, 1000);
}

/* ── SEARCH ───────────────────────────────────────────────────── */
function toggleSearch() {
  const bar = document.getElementById("searchBar");
  const inp = document.getElementById("searchInput");
  bar.classList.toggle("active");
  if (bar.classList.contains("active"))
    setTimeout(() => inp && inp.focus(), 200);
  else clearSearch();
}
function clearSearch() {
  const el = document.getElementById("searchResults");
  if (el) el.innerHTML = "";
}
function initSearch() {
  const tog = document.getElementById("searchToggle");
  const inp = document.getElementById("searchInput");
  if (tog) tog.addEventListener("click", toggleSearch);
  if (inp) {
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 2) {
        clearSearch();
        return;
      }
      const res = PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.cat.toLowerCase().includes(q),
      ).slice(0, 6);
      const el = document.getElementById("searchResults");
      if (!el) return;
      el.innerHTML = res.length
        ? res
            .map(
              (
                p,
              ) => `<div class="search-result-item" onclick="quickView(${p.id});toggleSearch()">
            <img src="${p.img}" alt="${p.name}">
            <div><strong>${p.name}</strong><span>${fmt(p.price)} — ${p.cat}</span></div>
          </div>`,
            )
            .join("")
        : '<div class="search-result-item"><span style="color:#888">Nenhum resultado encontrado</span></div>';
    });
    inp.addEventListener("keydown", (e) => {
      if (e.key === "Escape") toggleSearch();
    });
  }
}

/* ── STICKY HEADER ────────────────────────────────────────────── */
function initStickyHeader() {
  const h = document.getElementById("header");
  if (!h) return;
  window.addEventListener(
    "scroll",
    () => h.classList.toggle("scrolled", window.scrollY > 40),
    { passive: true },
  );
}

/* ── MOBILE MENU ──────────────────────────────────────────────── */
function initMobileMenu() {
  const burger = document.getElementById("hamburger");
  const nav = document.getElementById("navLinks");
  if (!burger || !nav) return;
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("open");
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      burger.classList.remove("open");
      nav.classList.remove("open");
    }
  });
}

/* ── NEWSLETTER ───────────────────────────────────────────────── */
function subscribeNewsletter(e) {
  e.preventDefault();
  const inp = e.target.querySelector("input[type=email]");
  showToastMsg(
    "✅ Obrigado! Você receberá nossas ofertas em breve.",
    "success",
  );
  if (inp) inp.value = "";
}

/* ── PROMO BUTTONS ────────────────────────────────────────────── */
function initPromoButtons() {
  // "Ver Coleção" → filtra por Corrida
  document.querySelectorAll(".promo-orange .btn-promo").forEach((b) => {
    b.addEventListener("click", () => setFilter("Corrida"));
  });
  // "Explorar" → filtra por Academia
  document.querySelectorAll(".promo-dark .btn-promo").forEach((b) => {
    b.addEventListener("click", () => setFilter("Academia"));
  });
  // Hero "Ver Produtos"
  document.querySelectorAll(".hero-buttons .btn-primary").forEach((b) => {
    b.addEventListener("click", () =>
      document.getElementById("ofertas").scrollIntoView({ behavior: "smooth" }),
    );
  });
  // Hero "Flash Sale"
  document.querySelectorAll(".hero-buttons .btn-outline").forEach((b) => {
    b.addEventListener("click", () =>
      document
        .getElementById("flashsale")
        .scrollIntoView({ behavior: "smooth" }),
    );
  });
}

/* ── SCROLL ANIMATIONS ────────────────────────────────────────── */
function initScrollAnimations() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.style.opacity = "1";
          en.target.style.transform = "translateY(0)";
          obs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  document
    .querySelectorAll(
      ".cat-card,.flash-card,.testimonial-card,.trust-item,.promo-card",
    )
    .forEach((el, i) => {
      el.style.cssText += `opacity:0;transform:translateY(28px);transition:opacity .5s ${i * 0.07}s ease,transform .5s ${i * 0.07}s ease`;
      obs.observe(el);
    });
}

/* ── FOOTER LINKS ─────────────────────────────────────────────── */
function initFooterLinks() {
  const map = {
    Corrida: "Corrida",
    Futebol: "Futebol",
    Academia: "Academia",
    Natação: "Natacao",
    Ciclismo: "Ciclismo",
    "Tênis de Quadra": "Tenis",
    Basquete: "Basquete",
  };
  document.querySelectorAll(".footer-links a").forEach((a) => {
    const txt = a.textContent.trim();
    if (map[txt]) {
      a.href = "#ofertas";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        setFilter(map[txt]);
      });
    }
  });
  // Links de secao do footer (Empresa, Atendimento)
  document.querySelectorAll('.footer-links a[href="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showToastMsg("ℹ️ Página em construção. Em breve!", "");
    });
  });
}

/* ── BOTAO FINALIZAR COMPRA ───────────────────────────────────── */
function initCheckoutButton() {
  document.querySelectorAll(".btn-checkout").forEach((b) => {
    b.addEventListener("click", () => {
      closeCart();
      openCheckout();
    });
  });
}

/* ── WISHLIST BUTTON ──────────────────────────────────────────── */
function initWishlistButton() {
  const btn = document.getElementById("wishlistBtn");
  if (btn) btn.addEventListener("click", openWishlistModal);
}

/* ── CART BUTTON ──────────────────────────────────────────────── */
function initCartButton() {
  const btn = document.getElementById("cartBtn");
  if (btn) btn.addEventListener("click", openCart);
}

/* ── INIT ─────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all", PAGE_SIZE);
  initFilterTabs();
  initLoadMore();
  updateCartUI();
  initCountdown();
  initSearch();
  initStickyHeader();
  initMobileMenu();
  initCartButton();
  initCheckoutButton();
  initWishlistButton();
  initPromoButtons();
  initFooterLinks();
  setTimeout(initScrollAnimations, 120);
});
