
window.addEventListener('load', () => {
    const door = document.getElementById('door');
  
    setTimeout(() => {
      door.classList.add('open');
    }, 300);
  
   
    setTimeout(() => {
      door.style.display = 'none';
    }, 1800);
  });
  
let products = JSON.parse(localStorage.getItem('products')) || [];
let editId = null;

const productList = document.getElementById('productList');
const toast = document.getElementById('toast');

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function save() {
    localStorage.setItem('products', JSON.stringify(products));
}

function render(list = products) {
    productList.innerHTML = '';
    list.forEach(p => {
        productList.innerHTML += `
      <div class="card">
        <span class="badge">${p.category || 'General'}</span>
        <img src="${p.image || 'https://via.placeholder.com/400'}" />
        <div class="content">
          <h3>${p.title}</h3>
          <p><b>₹ ${p.price}</b></p>
          <div class="actions">
            <button class="edit" onclick="edit(${p.id})">Edit</button>
            <button class="delete" onclick="del(${p.id})">Delete</button>
          </div>
        </div>
      </div>`;
    });
}

function updateFilter() {
    const filter = document.getElementById('filter');
    filter.innerHTML = '<option value="">All Categories</option>';
    [...new Set(products.map(p => p.category).filter(Boolean))]
        .forEach(c => filter.innerHTML += `<option>${c}</option>`);
}

productForm.onsubmit = e => {
    e.preventDefault();
    let t = title.value;
    let pr = price.value;
    let img = image.value;
    let cat = category.value;

    if (editId) {
        let o = products.find(p => p.id === editId);
        Object.assign(o, { title: t, price: pr, image: img, category: cat });
        editId = null;
        showToast('Product Updated');
    } else {
        products.push({ id: Date.now(), title: t, price: pr, image: img, category: cat });
        showToast('Product Added');
    }

    save();
    productForm.reset();
    updateFilter();
    render();
}

function del(id) {
    if (confirm('Delete this product?')) {
        products = products.filter(p => p.id !== id);
        save();
        updateFilter();
        render();
        showToast('Product Deleted');
    }
}

function edit(id) {
    let p = products.find(p => p.id === id);
    title.value = p.title;
    price.value = p.price;
    image.value = p.image;
    category.value = p.category;
    editId = id;
}

search.oninput = () =>
    render(products.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase())));

sort.onchange = () => {
    let s = [...products];
    if (sort.value === 'low') s.sort((a, b) => a.price - b.price);
    if (sort.value === 'high') s.sort((a, b) => b.price - a.price);
    render(s);
}

filter.onchange = () =>
    filter.value ? render(products.filter(p => p.category === filter.value)) : render();


updateFilter();
render();