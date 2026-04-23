const tovary = [
    // --- МАКИЯЖ ---
    { id: 1, kategory: 'makeup', podkat: 'face', name: 'Dior Foundation', name_kz: 'Dior тональді кремі', name_en: 'Dior Foundation', price: 21000, oldPrice: 24000, isSale: true, img: 'image/dior.jpg' },
    { id: 12, kategory: 'makeup', podkat: 'face', name: 'Rare Beauty Blush', name_kz: 'Rare Beauty опасы', name_en: 'Rare Beauty Blush', price: 16000, img: 'image/rare beauty.jpg' },
    { id: 34, kategory: 'makeup', podkat: 'face', name: 'Пудра Laura Mercier', name_kz: 'Laura Mercier опасы', name_en: 'Laura Mercier Powder', price: 24000, img: 'image/laura.jpg' },
    { id: 40, kategory: 'makeup', podkat: 'face', name: 'Консилер Tarte Shape Tape', name_kz: 'Tarte консилері', name_en: 'Tarte Shape Tape', price: 14500, img: 'image/tarte.jpg' },
    { id: 41, kategory: 'makeup', podkat: 'face', name: "Праймер Charlotte Tilbury", name_kz: "Charlotte Tilbury праймері", name_en: "Hollywood Flawless Filter", price: 28000, img: 'image/ct_filter.jpg' },
    { id: 8, kategory: 'makeup', podkat: 'lips', name: 'Dior Lip Shine', name_kz: 'Dior ерін далабы', name_en: 'Dior Lip Shine', price: 22000, img: 'image/dior-lip.jpg' },
    { id: 21, kategory: 'makeup', podkat: 'lips', name: 'Trend Lip Kit', name_kz: 'Ерінге арналған жиынтық', name_en: 'Trend Lip Kit', price: 12000, img: 'image/lip kit.jpg' },
    { id: 35, kategory: 'makeup', podkat: 'lips', name: 'Масло для губ Clarins', name_kz: 'Clarins ерін майы', name_en: 'Clarins Lip Oil', price: 13500, img: 'image/clarins_oil.jpg' },
    { id: 42, kategory: 'makeup', podkat: 'lips', name: "Помада MAC Matte", name_kz: "MAC ерін далабы", name_en: "MAC Matte Lipstick", price: 11000, img: 'image/mac_lips.jpg' },
    { id: 43, kategory: 'makeup', podkat: 'lips', name: "Блеск Fenty Beauty", name_kz: "Fenty Beauty жылтырағы", name_en: "Fenty Gloss Bomb", price: 14000, img: 'image/fenty_gloss.jpg' },
    { id: 5, kategory: 'makeup', podkat: 'eyes', name: 'Тушь MAC', name_kz: 'MAC тушы', name_en: 'MAC Mascara', price: 12000, img: 'image/mac.jpg' },
    { id: 13, kategory: 'makeup', podkat: 'eyes', name: 'Huda Palette', name_kz: 'Huda бояулар жинағы', name_en: 'Huda Palette', price: 30000, oldPrice: 34000, isSale: true, img: 'image/huda.jpg' },
    { id: 36, kategory: 'makeup', podkat: 'eyes', name: 'Подводка Tom Ford', name_kz: 'Tom Ford контурлағышы', name_en: 'Tom Ford Eyeliner', price: 28000, img: 'image/tf_liner.jpg' },
    { id: 44, kategory: 'makeup', podkat: 'eyes', name: "Тени Urban Decay Naked", name_kz: "Urban Decay бояулары", name_en: "Naked Palette", price: 32000, img: 'image/ud_naked.jpg' },
    { id: 45, kategory: 'makeup', podkat: 'eyes', name: "Карандаш для бровей ABH", name_kz: "ABH қас қарындашы", name_en: "Anastasia Brow Wiz", price: 12500, img: 'image/abh_brow.jpg' },

    // --- УХОД ---
    { id: 101, kategory: 'care', podkat: 'face-care', name: 'Крем Aravia', name_kz: 'Aravia кремі', name_en: 'Aravia Cream', price: 7500, img: 'image/aravia.jpg' },
    { id: 102, kategory: 'care', podkat: 'face-care', name: 'Тоник Pixi', name_kz: 'Pixi тонигі', name_en: 'Pixi Tonic', price: 9000, img: 'image/pixi.jpg' },
    { id: 103, kategory: 'care', podkat: 'body', name: 'CeraVe Gel', name_kz: 'CeraVe гелі', name_en: 'CeraVe Gel', price: 8500, img: 'image/cerave.jpg' },
    { id: 104, kategory: 'care', podkat: 'spf', name: 'Beauty of Joseon SPF', name_kz: 'Joseon SPF', name_en: 'Joseon SPF', price: 7800, isSale: true, oldPrice: 9500, img: 'image/spf1.jpg' },

    // --- ПРОЧЕЕ ---
    { id: 201, kategory: 'vits', name: 'Омега-3 Solgar', name_kz: 'Solgar Омега-3', name_en: 'Solgar Omega-3', price: 12500, img: 'image/solgar.jpg' },
    { id: 202, kategory: 'asia', name: 'Cosrx Snail Mucin', name_kz: 'Ұлу муцині', name_en: 'Snail Mucin', price: 8900, img: 'image/cosrx.jpg' },
    { id: 203, kategory: 'men', name: 'Sauvage Dior', name_kz: 'Sauvage Dior', name_en: 'Sauvage Dior', price: 55000, isSale: true, img: 'image/sauvage.jpg' },
    { id: 204, kategory: 'kids', name: 'Mustela Baby', name_kz: 'Mustela балаларға', name_en: 'Mustela Baby', price: 11000, img: 'image/mustela.jpg' }
];

let korzina = [];
let izbrannoe = [];
let lang = 'ru';
let curKat = 'all';
let curPodKat = 'all';

const dict = {
    ru: { buy: "В корзину", fav: "Избранное", cart: "Корзина", all: "Все", sale: "Акции" },
    kz: { buy: "Себетке", fav: "Таңдаулы", cart: "Себет", all: "Барлығы", sale: "Акция" },
    en: { buy: "To Cart", fav: "Favs", cart: "Cart", all: "All", sale: "Sale" }
};

window.onload = () => { smenitYazyk('ru'); };

function smenitYazyk(l) {
    lang = l;
    sortiruy();
}

function filtruyKategoriyu(k) {
    curKat = k;
    curPodKat = 'all'; // Сброс подкатегории
    document.querySelectorAll('.sub-cats').forEach(s => s.classList.remove('active'));
    let sub = document.getElementById('sub-' + k);
    if(sub) sub.classList.add('active');
    pokazatStranitsu('catalog-page');
    sortiruy();
}

function filtruyPodkategoriyu(pk) {
    curPodKat = pk;
    sortiruy();
}

function sortiruy() {
    let res = [...tovary];

    // 1. Фильтр основной категории
    if(curKat === 'sale') res = res.filter(t => t.isSale);
    else if(curKat !== 'all') res = res.filter(t => t.kategory === curKat);

    // 2. Фильтр подкатегории
    if(curPodKat !== 'all') res = res.filter(t => t.podkat === curPodKat);

    // 3. Поиск
    const poisk = document.getElementById('searchInput').value.toLowerCase();
    if(poisk) res = res.filter(t => t.name.toLowerCase().includes(poisk));

    // 4. Сортировка по цене
    const sortVal = document.getElementById('priceSort').value;
    if(sortVal === 'low') res.sort((a, b) => a.price - b.price);
    else if(sortVal === 'high') res.sort((a, b) => b.price - a.price);

    pokazatTovary(res, 'product-list');
}

function pokazatTovary(arr, containerId) {
    const box = document.getElementById(containerId);
    if(!box) return;
    box.innerHTML = "";
    arr.forEach(t => {
        const name = lang === 'ru' ? t.name : (lang === 'kz' ? t.name_kz : t.name_en);
        box.innerHTML += `
            <div class="card">
                ${t.isSale ? `<div class="badge">SALE</div>` : ""}
                <img src="${t.img}" alt="${name}">
                <h4>${name}</h4>
                <p><b>${t.price} ₸</b></p>
                <button class="buy-btn" onclick="dobavitVKorzinu(${t.id})">${dict[lang].buy}</button>
            </div>`;
    });
}

function dobavitVKorzinu(id) {
    korzina.push(tovary.find(t => t.id === id));
    document.getElementById('cartCount').innerText = korzina.length;
}

function pokazatStranitsu(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Функции для отзывов (заглушки)
function otkrytReview() { document.getElementById('review-modal').style.display = 'block'; }
function zakrytReview() { document.getElementById('review-modal').style.display = 'none'; }
function setStar(n) {}
function saveReview() { alert("Спасибо!"); zakrytReview(); }