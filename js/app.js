(() => {
'use strict';

const products = [
 {id:1,name:'پیراهن مردانه کلاسیک',category:'men',categoryName:'مردانه',price:280000,oldPrice:320000,rating:4.8,reviews:126,image:'images/product/men/1.jpg',tag:'popular',discount:true},
 {id:2,name:'استایل مردانه روزمره',category:'men',categoryName:'مردانه',price:210000,oldPrice:280000,rating:4.6,reviews:89,image:'images/product/men/2.jpg',tag:'new',discount:true},
 {id:3,name:'پیراهن مردانه مینیمال',category:'men',categoryName:'مردانه',price:250000,oldPrice:420000,rating:4.7,reviews:74,image:'images/product/men/3.jpg',tag:'popular',discount:true},
 {id:4,name:'پیراهن مردانه اقتصادی',category:'men',categoryName:'مردانه',price:120000,oldPrice:220000,rating:4.4,reviews:52,image:'images/product/men/4.jpg',tag:'new',discount:true},
 {id:5,name:'لباس مجلسی زنانه',category:'women',categoryName:'زنانه',price:120000,rating:4.9,reviews:214,image:'images/product/1.jpg',tag:'popular',discount:false},
 {id:6,name:'لباس زنانه شیک',category:'women',categoryName:'زنانه',price:180000,rating:4.8,reviews:131,image:'images/product/2.jpg',tag:'new',discount:false},
 {id:7,name:'لباس مجلسی خاص',category:'women',categoryName:'زنانه',price:260000,rating:4.7,reviews:96,image:'images/product/3.jpg',tag:'popular',discount:false},
 {id:8,name:'لباس زنانه جدید',category:'women',categoryName:'زنانه',price:220000,oldPrice:300000,rating:4.5,reviews:67,image:'images/product/4.jpg',tag:'new',discount:true},
 {id:9,name:'کفش روزمره مردانه',category:'men',categoryName:'کفش',price:390000,oldPrice:450000,rating:4.6,reviews:118,image:'images/product/shoe/1.jpg',tag:'new',discount:true},
 {id:10,name:'کفش اسپرت سبک',category:'women',categoryName:'کفش',price:450000,rating:4.7,reviews:82,image:'images/product/shoe/2.jpg',tag:'popular',discount:false},
 {id:11,name:'کفش کلاسیک',category:'men',categoryName:'کفش',price:520000,rating:4.5,reviews:41,image:'images/product/shoe/3.jpg',tag:'new',discount:false},
 {id:12,name:'کفش روزمره',category:'child',categoryName:'بچگانه',price:290000,oldPrice:350000,rating:4.4,reviews:35,image:'images/product/shoe/4.jpg',tag:'new',discount:true},
 {id:13,name:'لپ‌تاپ اقتصادی',category:'digital',categoryName:'دیجیتال',price:8900000,oldPrice:9600000,rating:4.7,reviews:63,image:'images/product/laptop/1.jpg',tag:'popular',discount:true},
 {id:14,name:'لپ‌تاپ سبک و قابل حمل',category:'digital',categoryName:'دیجیتال',price:7600000,rating:4.6,reviews:44,image:'images/product/laptop/2.jpg',tag:'new',discount:false},
 {id:15,name:'لپ‌تاپ حرفه‌ای',category:'digital',categoryName:'دیجیتال',price:10000000,oldPrice:11200000,rating:4.9,reviews:29,image:'images/product/laptop/3.jpg',tag:'popular',discount:true},
 {id:16,name:'لپ‌تاپ دانشجویی',category:'digital',categoryName:'دیجیتال',price:6100000,rating:4.3,reviews:88,image:'images/product/laptop/4.jpg',tag:'new',discount:false},
 {id:17,name:'محصول مراقبت و زیبایی',category:'beauty',categoryName:'زیبایی',price:180000,oldPrice:240000,rating:4.8,reviews:145,image:'images/product/Cosmetics.jpg',tag:'popular',discount:true},
 {id:18,name:'محصول آرایشی منتخب',category:'beauty',categoryName:'زیبایی',price:320000,rating:4.7,reviews:97,image:'images/product/Cosmetic.jpg',tag:'new',discount:false},
 {id:19,name:'تیشرت مردانه',category:'men',categoryName:'مردانه',price:45000,oldPrice:85000,rating:4.4,reviews:180,image:'images/product/suggest/1.jpg',tag:'new',discount:true},
 {id:20,name:'ساعت شیک',category:'digital',categoryName:'اکسسوری',price:80000,oldPrice:120000,rating:4.5,reviews:156,image:'images/product/suggest/2.jpg',tag:'popular',discount:true},
 {id:21,name:'هدفون بی‌سیم',category:'digital',categoryName:'دیجیتال',price:30000,oldPrice:60000,rating:4.2,reviews:201,image:'images/product/suggest/3.jpg',tag:'popular',discount:true},
 {id:22,name:'پیراهن بچگانه',category:'child',categoryName:'بچگانه',price:120000,oldPrice:220000,rating:4.6,reviews:91,image:'images/product/child/1.jpg',tag:'popular',discount:true},
 {id:23,name:'استایل کودکانه',category:'child',categoryName:'بچگانه',price:160000,rating:4.7,reviews:64,image:'images/product/child/2.jpg',tag:'new',discount:false},
 {id:24,name:'لباس کودک راحت',category:'child',categoryName:'بچگانه',price:140000,rating:4.5,reviews:49,image:'images/product/child/3.jpg',tag:'new',discount:false}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const state = {
  cart: JSON.parse(localStorage.getItem('ashkan-cart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('ashkan-favorites') || '[]'),
  filter:'all', category:'all', maxPrice:10000000, discountOnly:false, search:'', sort:'featured',
  recent: JSON.parse(localStorage.getItem('ashkan-recent') || '[]'),
  compare: JSON.parse(localStorage.getItem('ashkan-compare') || '[]'),
  coupon: JSON.parse(localStorage.getItem('ashkan-coupon') || 'null'),
  discountAmount: 0
};
const fmt = n => new Intl.NumberFormat('fa-IR').format(n);
const save = () => { localStorage.setItem('ashkan-cart',JSON.stringify(state.cart)); localStorage.setItem('ashkan-favorites',JSON.stringify(state.favorites)); localStorage.setItem('ashkan-recent',JSON.stringify(state.recent)); localStorage.setItem('ashkan-compare',JSON.stringify(state.compare)); localStorage.setItem('ashkan-coupon',JSON.stringify(state.coupon)); };
const toast = msg => { const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),2400); };
const productById = id => products.find(p=>p.id===Number(id));

function productCard(p){
  const fav=state.favorites.includes(p.id);
  return `<article class="product-card" data-id="${p.id}">
    <div class="product-image">
      ${p.discount?'<span class="badge">پیشنهاد ویژه</span>':''}
      <a href="product.html?id=${p.id}" class="product-link" aria-label="مشاهده ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a>
      <div class="product-actions">
        <button class="round-action ${fav?'active':''}" data-action="favorite" aria-label="افزودن به علاقه‌مندی"><i class="${fav?'fas':'far'} fa-heart"></i></button>
        <button class="round-action" data-action="quick" aria-label="مشاهده سریع"><i class="fas fa-eye"></i></button><button class="round-action" data-action="compare" aria-label="افزودن به مقایسه"><i class="fas fa-balance-scale"></i></button>
      </div>
    </div>
    <div class="product-info">
      <span class="product-category">${p.categoryName}</span>
      <h3 title="${p.name}"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="rating">${'★'.repeat(Math.round(p.rating))}<span>(${fmt(p.reviews)})</span></div>
      <div class="price-row"><div>${p.oldPrice?`<div class="old-price">${fmt(p.oldPrice)} تومان</div>`:''}<div class="price">${fmt(p.price)} <small>تومان</small></div></div>
      <button class="add-cart" data-action="cart" aria-label="افزودن به سبد"><i class="fas fa-plus"></i></button></div>
    </div>
  </article>`;
}

function filteredProducts(){
 let list=products.filter(p => p.price<=state.maxPrice);
 if(state.category!=='all') list=list.filter(p=>p.category===state.category);
 if(state.discountOnly) list=list.filter(p=>p.discount);
 if(state.filter==='discount') list=list.filter(p=>p.discount);
 if(state.filter==='popular') list=list.filter(p=>p.tag==='popular');
 if(state.filter==='new') list=list.filter(p=>p.tag==='new');
 if(state.search) list=list.filter(p=>(p.name+' '+p.categoryName).includes(state.search));
 return list.sort((a,b)=>{
   if(state.sort==='priceAsc') return a.price-b.price;
   if(state.sort==='priceDesc') return b.price-a.price;
   if(state.sort==='rating') return b.rating-a.rating;
   return b.rating-a.rating;
 });
}

function renderProducts(){
 const list=filteredProducts(), grid=$('#productGrid');
 grid.innerHTML=list.map(productCard).join('');
 $('#resultCount').textContent=`${fmt(list.length)} محصول`;
 $('#emptyState').hidden=!!list.length;
}

function renderDeals(){
 $('#dealGrid').innerHTML=products.filter(p=>p.discount).slice(0,3).map(p=>`<article class="deal-card"><span class="discount-badge">${fmt(Math.round((1-p.price/p.oldPrice)*100))}%</span><a href="product.html?id=${p.id}" class="product-link" aria-label="مشاهده ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a><div><span class="product-category">${p.categoryName}</span><h3>${p.name}</h3><div class="old">${fmt(p.oldPrice)} تومان</div><div class="new">${fmt(p.price)} تومان</div><button class="primary-btn" style="margin-top:12px;font-size:10px" data-deal-cart="${p.id}">افزودن به سبد</button></div></article>`).join('');
}

function addCart(id){
 const item=state.cart.find(x=>x.id===id);
 item?item.qty++:state.cart.push({id,qty:1});
 save(); renderCart(); toast('محصول به سبد خرید اضافه شد.');
}
function renderCart(){
 const count=state.cart.reduce((s,x)=>s+x.qty,0); $('#cartCount').textContent=fmt(count);
 const items=$('#cartItems');
 if(!state.cart.length){items.innerHTML='<div class="cart-empty"><i class="fas fa-shopping-bag" style="font-size:38px;margin-bottom:10px"></i><p>سبد خریدت هنوز خالی است.</p><small>محصولات مورد علاقه‌ات را اضافه کن.</small></div>'; $('#cartTotal').textContent='۰ تومان'; if($('#shippingProgress'))$('#shippingProgress').style.width='0%'; return;}
 let subtotal=0; items.innerHTML=state.cart.map(x=>{const p=productById(x.id); subtotal+=p.price*x.qty; return `<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${fmt(p.price)} تومان</small><div class="qty"><button data-qty="${p.id}" data-delta="-1">−</button><b>${fmt(x.qty)}</b><button data-qty="${p.id}" data-delta="1">+</button></div></div><button class="cart-remove" data-remove="${p.id}"><i class="fas fa-trash"></i></button></div>`}).join('');
 const discount=state.coupon==='WELCOME10'?subtotal*.10:state.coupon==='ASHKAN20'?subtotal*.20:0; const total=Math.max(0,subtotal-discount); $('#cartTotal').textContent=`${fmt(total)} تومان`; if($('#couponInput'))$('#couponInput').value=state.coupon||''; const pct=Math.min(100,subtotal/1000000*100); if($('#shippingProgress'))$('#shippingProgress').style.width=pct+'%'; if($('#shippingMessage'))$('#shippingMessage').textContent=subtotal>=1000000?'ارسال این سفارش رایگان شد 🎉':`برای ارسال رایگان ${fmt(1000000-subtotal)} تومان دیگر خرید کنید.`;
}

function openCart(){ $('#cartDrawer').classList.add('show'); $('#overlay').classList.add('show'); $('#cartDrawer').setAttribute('aria-hidden','false'); }
function closePanels(){ $('#cartDrawer').classList.remove('show'); $('#chatbot').classList.remove('show'); $('#filters').classList.remove('open'); $('#overlay').classList.remove('show'); }
function rememberProduct(id){ state.recent=[id,...state.recent.filter(x=>x!==id)].slice(0,8); save(); renderRecent(); }
function renderRecent(){ const sec=$('#recentSection'),grid=$('#recentGrid'); if(!sec||!grid)return; const list=state.recent.map(productById).filter(Boolean); sec.hidden=!list.length; grid.innerHTML=list.map(p=>`<article class="mini-product"><a href="product.html?id=${p.id}" class="product-link" aria-label="مشاهده ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a><div><b>${p.name}</b><small>${fmt(p.price)} تومان</small><button data-recent-view="${p.id}">مشاهده</button></div></article>`).join(''); }
function renderFavorites(){ const box=$('#favoriteItems'); if(!box)return; $('#favoriteCount').textContent=fmt(state.favorites.length); const list=state.favorites.map(productById).filter(Boolean); box.innerHTML=list.length?list.map(p=>`<div class="cart-row"><img src="${p.image}" alt="${p.name}"><div><h4>${p.name}</h4><small>${fmt(p.price)} تومان</small><button class="mini-link" data-fav-cart="${p.id}">افزودن به سبد</button></div><button class="cart-remove" data-fav-remove="${p.id}"><i class="fas fa-trash"></i></button></div>`).join(''):'<div class="cart-empty"><i class="far fa-heart"></i><p>هنوز محصولی ذخیره نکرده‌اید.</p></div>'; }
function renderCompare(){ const sec=$('#compareSection'),wrap=$('#compareTableWrap'); if(!sec||!wrap)return; const list=state.compare.map(productById).filter(Boolean); sec.hidden=!list.length; if(!list.length){wrap.innerHTML='';return;} wrap.innerHTML=`<div class="compare-table"><div class="compare-row compare-head"><span>ویژگی</span>${list.map(p=>`<div><img src="${p.image}" alt="${p.name}"><b>${p.name}</b><button data-compare-remove="${p.id}">حذف</button></div>`).join('')}</div><div class="compare-row"><span>قیمت</span>${list.map(p=>`<div>${fmt(p.price)} تومان</div>`).join('')}</div><div class="compare-row"><span>امتیاز</span>${list.map(p=>`<div>★ ${p.rating}</div>`).join('')}</div><div class="compare-row"><span>دسته</span>${list.map(p=>`<div>${p.categoryName}</div>`).join('')}</div><div class="compare-row"><span>وضعیت</span>${list.map(p=>`<div>${p.discount?'دارای تخفیف':'قیمت عادی'}</div>`).join('')}</div></div>`; }
function addCompare(id){ if(state.compare.includes(id)){toast('این محصول قبلاً در مقایسه است.');return;} if(state.compare.length>=4){toast('حداکثر ۴ محصول قابل مقایسه است.');return;} state.compare.push(id); save(); renderCompare(); toast('محصول به مقایسه اضافه شد.'); }
function showModal(p){
 rememberProduct(p.id);
 $('#modalBox').innerHTML=`<button class="close-modal" id="modalClose" aria-label="بستن"><i class="fas fa-times"></i></button><div class="quick-view"><img src="${p.image}" alt="${p.name}"><div><span class="product-category">${p.categoryName}</span><h2>${p.name}</h2><div class="rating">${'★'.repeat(Math.round(p.rating))} <span>${fmt(p.reviews)} نظر</span></div><p>محصولی منتخب با امتیاز کاربران و مناسب برای یک خرید مطمئن‌تر.</p><div class="price">${fmt(p.price)} تومان</div><div class="product-meta"><span><i class="fas fa-box"></i> موجود در انبار</span><span><i class="fas fa-truck"></i> ارسال سریع</span></div><div class="quick-qty"><button data-modal-qty="-1">−</button><b id="modalQty">1</b><button data-modal-qty="1">+</button></div><button class="primary-btn" data-modal-cart="${p.id}">افزودن به سبد <i class="fas fa-shopping-bag"></i></button></div></div>`;
 $('#modal').classList.add('show');
}
function chatReply(text){
 const t=text.trim().toLowerCase();
 let list=products;
 if(t.includes('تخفیف')||t.includes('ارزان')) list=products.filter(p=>p.discount);
 else if(t.includes('لپ')||t.includes('دیجیتال')||t.includes('هدفون')||t.includes('ساعت')) list=products.filter(p=>p.category==='digital');
 else if(t.includes('مرد')) list=products.filter(p=>p.category==='men');
 else if(t.includes('زن')) list=products.filter(p=>p.category==='women');
 else if(t.includes('بچ')||t.includes('کودک')) list=products.filter(p=>p.category==='child');
 else if(t.includes('زیب')||t.includes('آرایش')) list=products.filter(p=>p.category==='beauty');
 const nums=t.match(/\d[\d,.\s]*/g);
 const budget=nums?.length?Number(nums[nums.length-1].replace(/[^\d]/g,'')):null;
 if(budget && budget>0) list=list.filter(p=>p.price<=budget* (budget<10000?1000:1));
 if(!list.length) return 'فعلاً محصولی با این مشخصات در ویترین پیدا نکردم. اگر دسته‌بندی یا بودجه‌ات را بگویی، دقیق‌تر جستجو می‌کنم.';
 const top=list.slice(0,3);
 return `چند گزینه مناسب پیدا کردم:\n${top.map(p=>`• ${p.name} — ${fmt(p.price)} تومان`).join('\n')}\n\nاگر یکی را انتخاب کنی، می‌توانم آن را به سبد اضافه کنم.`;
}

function initSlider(){
 const slides=$$('.slide'), dots=$('#sliderDots'); let index=0,timer;
 dots.innerHTML=slides.map((_,i)=>`<button class="${i===0?'active':''}" data-slide="${i}" aria-label="اسلاید ${i+1}"></button>`).join('');
 const go=i=>{index=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===index));$$('[data-slide]').forEach((d,n)=>d.classList.toggle('active',n===index));};
 const restart=()=>{clearInterval(timer);timer=setInterval(()=>go(index+1),6000)}; restart();
 $('#nextSlide').onclick=()=>{go(index+1);restart()}; $('#prevSlide').onclick=()=>{go(index-1);restart()};
 dots.onclick=e=>{const b=e.target.closest('[data-slide]');if(b){go(+b.dataset.slide);restart()}};
}

document.addEventListener('click',e=>{
 const cat=e.target.closest('[data-category]'); if(cat){state.category=cat.dataset.category;$('#categoryFilter').value=state.category;state.filter='all';$$('.filter-btn').forEach(x=>x.classList.toggle('active',x.dataset.filter==='all'));renderProducts();$('#products').scrollIntoView({behavior:'smooth'});$('#megaPanel').classList.remove('show');}
 const scroll=e.target.closest('[data-scroll]'); if(scroll){e.preventDefault();$(scroll.dataset.scroll)?.scrollIntoView({behavior:'smooth'});}
 const action=e.target.closest('[data-action]'); if(action){const card=action.closest('.product-card'),id=Number(card.dataset.id),p=productById(id); if(action.dataset.action==='cart')addCart(id);if(action.dataset.action==='favorite'){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();renderProducts();toast(state.favorites.includes(id)?'به علاقه‌مندی‌ها اضافه شد.':'از علاقه‌مندی‌ها حذف شد.');}if(action.dataset.action==='quick')showModal(p);}
 const deal=e.target.closest('[data-deal-cart]');if(deal)addCart(Number(deal.dataset.dealCart));
 const qty=e.target.closest('[data-qty]');if(qty){const x=state.cart.find(i=>i.id===Number(qty.dataset.qty));x.qty+=Number(qty.dataset.delta);if(x.qty<=0)state.cart=state.cart.filter(i=>i.id!==x.id);save();renderCart();}
 const rm=e.target.closest('[data-remove]');if(rm){state.cart=state.cart.filter(i=>i.id!==Number(rm.dataset.remove));save();renderCart();}
 const mc=e.target.closest('[data-modal-cart]');if(mc){const q=Number($('#modalQty')?.textContent||1);for(let i=0;i<q;i++)addCart(Number(mc.dataset.modalCart));$('#modal').classList.remove('show');}
 const mq=e.target.closest('[data-modal-qty]');if(mq){const el=$('#modalQty');if(el)el.textContent=Math.max(1,Math.min(10,Number(el.textContent)+Number(mq.dataset.modalQty)));}
 const cmp=e.target.closest('[data-action=compare]');if(cmp){addCompare(Number(cmp.closest('.product-card').dataset.id));}
 const favRemove=e.target.closest('[data-fav-remove]');if(favRemove){state.favorites=state.favorites.filter(x=>x!==Number(favRemove.dataset.favRemove));save();renderFavorites();renderProducts();}
 const favCart=e.target.closest('[data-fav-cart]');if(favCart)addCart(Number(favCart.dataset.favCart));
 const recent=e.target.closest('[data-recent-view]');if(recent)showModal(productById(recent.dataset.recentView));
 const cr=e.target.closest('[data-compare-remove]');if(cr){state.compare=state.compare.filter(x=>x!==Number(cr.dataset.compareRemove));save();renderCompare();}
});
$('#favoritesBtn').onclick=()=>{renderFavorites();$('#favoritesDrawer').classList.add('show');$('#overlay').classList.add('show');};
$('#favoritesClose').onclick=closePanels;
$$('[data-open-compare]').forEach(b=>b.onclick=()=>{$('#compareSection').hidden=false;renderCompare();$('#compareSection').scrollIntoView({behavior:'smooth'});});
$$('[data-open-recent]').forEach(b=>b.onclick=()=>{$('#recentSection').hidden=false;renderRecent();$('#recentSection').scrollIntoView({behavior:'smooth'});});
$$('[data-clear-recent]').forEach(b=>b.onclick=()=>{state.recent=[];save();renderRecent();});
$$('[data-clear-compare]').forEach(b=>b.onclick=()=>{state.compare=[];save();renderCompare();});
$$('[data-open-coupon]').forEach(b=>b.onclick=()=>$('#couponModal').classList.add('show'));
$$('[data-close-coupon]').forEach(b=>b.onclick=()=>$('#couponModal').classList.remove('show'));
$$('[data-coupon]').forEach(b=>b.onclick=()=>{state.coupon=b.dataset.coupon;save();$('#couponInput').value=state.coupon;$('#couponModal').classList.remove('show');toast('کد تخفیف انتخاب شد.');});
$('#applyCoupon').onclick=()=>{const c=$('#couponInput').value.trim().toUpperCase();if(['WELCOME10','ASHKAN20','FREESHIP'].includes(c)){state.coupon=c;save();toast('کد تخفیف اعمال شد.');renderCart();}else toast('کد تخفیف معتبر نیست.');};
window.addEventListener('keydown',e=>{if(e.key==='/' && document.activeElement.tagName!=='INPUT'){e.preventDefault();$('#searchInput').focus();}});

$('#categoriesBtn').onclick=()=>$('#megaPanel').classList.toggle('show');
$('#mobileMenuBtn').onclick=()=>$('#mainNav').classList.toggle('open');
$('#cartBtn').onclick=openCart; $('#cartClose').onclick=closePanels; $('#overlay').onclick=closePanels;
$('#modal').onclick=e=>{if(e.target.id==='modal'||e.target.id==='modalClose')$('#modal').classList.remove('show')};
$('#themeBtn').onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('ashkan-theme',document.body.classList.contains('dark')?'dark':'light');$('#themeBtn i').className=document.body.classList.contains('dark')?'fas fa-sun':'fas fa-moon'};
if(localStorage.getItem('ashkan-theme')==='dark'){$('body').classList.add('dark');$('#themeBtn i').className='fas fa-sun';}
$$('.filter-btn').forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;$$('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts()});
$('#categoryFilter').onchange=e=>{state.category=e.target.value;renderProducts()};
$('#priceFilter').oninput=e=>{state.maxPrice=+e.target.value;$('#priceOutput').textContent=`تا ${fmt(state.maxPrice)} تومان`;renderProducts()};
$('#discountOnly').onchange=e=>{state.discountOnly=e.target.checked;renderProducts()};
$('#sortSelect').onchange=e=>{state.sort=e.target.value;renderProducts()};
$('#clearFilters').onclick=()=>{state.category='all';state.maxPrice=10000000;state.discountOnly=false;state.filter='all';$('#categoryFilter').value='all';$('#priceFilter').value=10000000;$('#priceOutput').textContent='تا ۱۰,۰۰۰,۰۰۰ تومان';$('#discountOnly').checked=false;$$('.filter-btn').forEach(x=>x.classList.toggle('active',x.dataset.filter==='all'));renderProducts()};
$('#mobileFilter').onclick=()=>{$('#filters').classList.add('open');$('#overlay').classList.add('show')};
const doSearch=()=>{state.search=$('#searchInput').value.trim();renderProducts();$('#products').scrollIntoView({behavior:'smooth'});$('#searchSuggestions').classList.remove('show')};
$('#searchSubmit').onclick=doSearch;$('#searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch()});
$('#searchInput').addEventListener('input',e=>{const q=e.target.value.trim();const box=$('#searchSuggestions');if(!q){box.classList.remove('show');return}const list=products.filter(p=>p.name.includes(q)||p.categoryName.includes(q)).slice(0,5);box.innerHTML=list.map(p=>`<div class="suggestion" data-suggestion="${p.id}"><span>${p.name}</span><small>${fmt(p.price)} تومان</small></div>`).join('')||'<div class="suggestion">محصولی با این عبارت پیدا نشد</div>';box.classList.add('show')});
$('#searchSuggestions').onclick=e=>{const s=e.target.closest('[data-suggestion]');if(s){showModal(productById(s.dataset.suggestion));$('#searchSuggestions').classList.remove('show')}};
$('#chatLauncher').onclick=()=>{$('#chatbot').classList.add('show');$('#chatbot').setAttribute('aria-hidden','false');$('#chatInput').focus()};
$('#chatClose').onclick=()=>{$('#chatbot').classList.remove('show');$('#chatbot').setAttribute('aria-hidden','true')};
function sendChat(text){if(!text.trim())return;$('#chatMessages').insertAdjacentHTML('beforeend',`<div class="user-msg">${text.replace(/[<>]/g,'')}</div>`);setTimeout(()=>{$('#chatMessages').insertAdjacentHTML('beforeend',`<div class="bot-msg">${chatReply(text).replace(/\n/g,'<br>')}</div>`);$('#chatMessages').scrollTop=$('#chatMessages').scrollHeight},300);$('#chatInput').value='';}
$('#chatForm').onsubmit=e=>{e.preventDefault();sendChat($('#chatInput').value)};
$$('.quick-prompts button').forEach(b=>b.onclick=()=>sendChat(b.textContent));
$('#newsletter').onsubmit=e=>{e.preventDefault();toast('عضویت شما با موفقیت ثبت شد.');e.target.reset()};
$('#checkoutBtn').onclick=()=>{if(!state.cart.length){toast('سبد خرید خالی است.');return;} renderCheckout();};
function renderCheckout(){ $('#checkoutBox').innerHTML=`<button class="close-modal" data-close-checkout><i class="fas fa-times"></i></button><div class="checkout-head"><span>مرحله ۱ از ۳</span><h2>ثبت سفارش</h2><p>اطلاعات ارسال را وارد کنید؛ این فرم در حالت Front-end شبیه‌سازی می‌شود.</p></div><form id="checkoutForm" class="checkout-form"><label>نام و نام خانوادگی<input required name=name placeholder="نام شما"></label><label>شماره موبایل<input required pattern="09[0-9]{9}" name=phone placeholder="09123456789"></label><label>آدرس کامل<textarea required name=address rows=3 placeholder="استان، شهر، خیابان، پلاک..."></textarea></label><div class="checkout-options"><button type="button" data-pay="cod">پرداخت در محل</button><button type="button" data-pay="online">پرداخت آنلاین</button></div><button class="primary-btn" type="submit">تأیید و ادامه <i class="fas fa-arrow-left"></i></button></form>`; $('#checkoutModal').classList.add('show'); }
$('#checkoutModal').onclick=e=>{if(e.target.id==='checkoutModal'||e.target.closest('[data-close-checkout]'))$('#checkoutModal').classList.remove('show');}; document.addEventListener('submit',e=>{if(e.target.id==='checkoutForm'){e.preventDefault();$('#checkoutBox').innerHTML=`<div class="success-checkout"><i class="fas fa-check-circle"></i><h2>سفارش آزمایشی ثبت شد</h2><p>در نسخه Front-end، سفارش در مرورگر شبیه‌سازی شد.</p><button class="primary-btn" data-finish-checkout>بازگشت به فروشگاه</button></div>`; state.cart=[];save();renderCart();}}); document.addEventListener('click',e=>{if(e.target.closest('[data-finish-checkout]'))$('#checkoutModal').classList.remove('show');});
window.addEventListener('scroll',()=>$('#backTop').classList.toggle('show',scrollY>500));
$('#backTop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
let end=Date.now()+2*3600*1000+14*60*1000+36*1000;setInterval(()=>{let d=Math.max(0,end-Date.now()),h=Math.floor(d/36e5),m=Math.floor(d%36e5/6e4),s=Math.floor(d%6e4/1e3);$('#countdown').textContent=[h,m,s].map(n=>String(n).padStart(2,'0')).join(':')},1000);

renderProducts();renderDeals();renderCart();renderRecent();renderCompare();renderFavorites();initSlider();
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
if(!localStorage.getItem('ashkan-cookie-ok'))$('#cookieBar').hidden=false; $('#cookieAccept').onclick=()=>{localStorage.setItem('ashkan-cookie-ok','1');$('#cookieBar').hidden=true;};
let deferredInstall=null; window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;$('#installPrompt').hidden=false;}); $('#installBtn').onclick=async()=>{if(deferredInstall){deferredInstall.prompt();deferredInstall=null;}$('#installPrompt').hidden=true;}; $('#installDismiss').onclick=()=>$('#installPrompt').hidden=true;
})();

