(() => {
  const categories = [
    { id: 'tostadas', title: 'Tostadas', photos: ['07','06','01','03','05','02'], items: [
      { name: 'Ceviche de pescado', price: 40 }, { name: 'Tostada de camarón', price: 70 }, { name: 'Tostada de pulpo', price: 85 }, { name: 'Tostada de caracol', price: 85 }, { name: 'Callo de almeja', price: 75 },
      { name: 'Ceviche de pescado con mayonesa', price: 45 }, { name: 'Camarón con mayonesa', price: 75 }, { name: 'Pulpo con mayonesa', price: 90 }, { name: 'Marlín con mayonesa', price: 80 },
      { name: 'La Caprichosa', price: 140, description: 'Paté de marlín, láminas de atún y camarón curtido bañado en salsa.' }
    ]},
    { id: 'ceviches', title: 'Ceviches', photos: ['06','01','02','03','05'], items: [
      { name: 'Ceviche de pescado', sizes: [{ label: 'Orden', price: 170 }, { label: 'Litro', price: 220 }] },
      { name: 'Pescado con mayonesa', sizes: [{ label: 'Orden', price: 185 }] },
      { name: 'Ceviche de camarón', sizes: [{ label: 'Orden', price: 200 }, { label: 'Litro', price: 260 }] },
      { name: 'Ceviche mixto', sizes: [{ label: 'Orden', price: 220 }, { label: 'Litro', price: 280 }] },
      { name: 'Camarón con mayonesa', sizes: [{ label: 'Orden', price: 210 }, { label: 'Litro', price: 270 }] },
      { name: 'Ceviche especial', sizes: [{ label: 'Orden', price: 220 }, { label: 'Litro', price: 280 }], description: 'Camarón curtido y al vapor, camarón seco, cebolla morada, piña, pepino y chiltepín.' }
    ]},
    { id: 'aguachiles', title: 'Aguachiles', photos: ['03','05','02','06','08'], items: [
      { name: '4 chiles', price: 200 }, { name: 'Verde', price: 200 }, { name: 'Rojo', price: 200 }, { name: 'Negro', price: 200 }, { name: 'Tatemado', price: 200 }, { name: 'Chiltepín', price: 200 }, { name: 'Macho con salsa macha', price: 200 }
    ]},
    { id: 'ensaladas', title: 'Ensaladas', photos: ['01','05','06','04','02'], items: [
      { name: 'Ensalada de camarón', price: 200 }, { name: 'Ensalada de pulpo', price: 260 }, { name: 'Ensalada mixta', price: 230 },
      { name: 'La Especial', price: 280, description: 'Camarón al vapor, pulpo, atún, callo, caracol y ostión.' },
      { name: 'La Más Deseada', price: 300, description: 'Camarón al vapor y curtido, pulpo, atún, callo y ostión.' },
      { name: 'La Consentida', price: 280, description: 'Camarón, pulpo, atún y marlín con aderezo de la casa y un ligero toque picante.' },
      { name: 'La Coqueta', price: 360, description: 'Combinación de barra fría y cocina caliente con atún, camarones, pulpo, ceviche con mayonesa, mejillones y callo de almeja.' }
    ]},
    { id: 'sopas-cocteles', title: 'Sopas y cocteles', photos: ['08','03','02','06'], items: [
      { name: 'Coctel de camarón', price: 190, description: 'Frío o caliente.' }, { name: 'Coctel de pulpo', price: 240, description: 'Frío o caliente.' },
      { name: 'Coctel mixto', price: 220, description: 'Frío o caliente.' }, { name: 'Sopa de mariscos', price: 299 },
      { name: 'Vaso paseado de camarón', price: 190 }, { name: 'Vaso paseado mixto', price: 220 }
    ]},
    { id: 'atun', title: 'Atún', photos: ['06','07','01'], items: [
      { name: 'Sashimi de atún', price: 210 }, { name: 'Tostada de atún', price: 90 }, { name: 'Tostada La Tóxica', price: 90 }, { name: 'Tostada La Cremosa', price: 90 }
    ]},
    { id: 'camarones', title: 'Camarones al gusto', photos: ['02'], items: [
      { name: 'Camarones al gusto', price: 210, options: ['Crema de champiñones', 'Mantequilla', 'Al ajo', 'Al ajillo', 'Diabla', 'Finas hierbas', 'Empanizados'], description: 'Acompañados con arroz y ensalada.' }
    ]},
    { id: 'especiales', title: 'Camarones especiales', photos: ['05','03','02','08','04'], items: [
      { name: 'Cucaracha', price: 220, description: 'Con cabeza.' }, { name: 'Machos', price: 220, description: 'Con cabeza.' }, { name: 'Zarandeados a la plancha', price: 230 },
      { name: 'Chíngate esa', price: 240, description: 'Camarón con cabeza y aderezo secreto de la casa.' },
      { name: 'Chiltepín', price: 260, description: 'Con cabeza, cebolla y chiltepín.' },
      { name: 'Jerry', price: 260, description: 'Camarón, pulpo, mejillones y elote amarillo en crema secreta de la casa.' }
    ]},
    { id: 'molcajetes', title: 'Molcajetes', photos: ['04','01'], items: [
      { name: 'Molcajete frío', price: 330, description: 'Camarón al vapor y curtido, pulpo, atún, callo de almeja y ostión.' },
      { name: 'Molcajete caliente', price: 330, description: 'Camarón, pulpo, mejillón, pescado y jaiba.' }
    ]},
    { id: 'burritas-quesadillas', title: 'Burritas y quesadillas', photos: ['11','01','02'], items: [
      { name: 'Burrita de marlín', price: 160 }, { name: 'Burrita de camarón', price: 180 }, { name: 'Burrita de pulpo', price: 190 },
      { name: 'Quesadillas de marlín', price: 170, description: '3 piezas. Acompañadas con arroz y ensalada.' },
      { name: 'Quesadillas de camarón', price: 180, description: '3 piezas. Acompañadas con arroz y ensalada.' },
      { name: 'Quesadillas de pulpo', price: 190, description: '3 piezas. Acompañadas con arroz y ensalada.' }
    ]},
    { id: 'chile-taco', title: 'Chile taco', photos: ['11','07'], items: [
      { name: 'Chile taco de marlín', price: 69, description: '1 pieza. Chile ancho con queso y tortilla de maíz.' },
      { name: 'Chile taco de camarón', price: 79, description: '1 pieza. Chile ancho con queso y tortilla de maíz.' },
      { name: 'Chile taco de pulpo', price: 89, description: '1 pieza. Chile ancho con queso y tortilla de maíz.' }
    ]},
    { id: 'carnes', title: 'Carnes', photos: ['09'], items: [
      { name: 'Costillas BBQ', price: 220, description: 'Acompañadas con ensalada, elote amarillo y papas a la francesa.' },
      { name: 'Costillas Jerry', price: 220, description: 'Acompañadas con ensalada, elote amarillo y papas a la francesa.' }
    ]},
    { id: 'bebidas', title: 'Bebidas', photos: ['10'], items: [
      { name: 'Limonada litro', price: 75 }, { name: 'Naranjada litro', price: 75 }, { name: 'Refresco 600 ml', price: 35 },
      { name: 'Agua fresca litro', price: 45 }, { name: 'Agua natural 500 ml', price: 20 }, { name: 'Clamato preparado', price: 60 },
      { name: 'Vaso salseado', price: 50 }, { name: 'Cerveza Corona ½', price: 40 }, { name: 'Cerveza Pacífico ½', price: 40 },
      { name: 'Cerveza Ultra ½', price: 45 }, { name: 'Caguama familiar', price: 89 }, { name: 'Cielo rojo', price: 89 }, { name: 'Michelada', price: 89 }
    ]}
  ];

  const menuRoot = document.querySelector('#menu-sections');
  const categoryNav = document.querySelector('#category-nav');
  const cart = new Map();
  const dialog = document.querySelector('#order-dialog');
  const toast = document.querySelector('#toast');
  let toastTimer;

  const pesos = (amount) => `$${Number(amount).toLocaleString('es-MX')}`;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const slug = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  function renderMenu() {
    categoryNav.innerHTML = categories.map((category, index) => `<a class="category-pill${index === 0 ? ' active' : ''}" href="#${category.id}">${escapeHTML(category.title)}</a>`).join('');
    menuRoot.innerHTML = categories.map((category) => `<section class="menu-section" id="${category.id}">
      <div class="section-title"><h2>${escapeHTML(category.title)}</h2><span>${String(category.items.length).padStart(2, '0')} opciones</span></div>
      <div class="products-grid">${category.items.map((item, index) => renderProduct(category, item, index)).join('')}</div>
    </section>`).join('');
  }

  function renderProduct(category, item, index) {
    const key = `${category.id}-${slug(item.name)}-${index}`;
    const photoFile = category.photos?.[index % category.photos.length] || '01';
    const photo = `images/platillos/platillo-${photoFile}.jpg`;
    const options = item.options?.length
      ? `<select class="product-options" aria-label="Preparación para ${escapeHTML(item.name)}" data-option><option value="">Elige preparación</option>${item.options.map((option) => `<option>${escapeHTML(option)}</option>`).join('')}</select>`
      : '';
    const sizes = item.sizes?.length
      ? `<div class="product-size-row"><select aria-label="Tamaño para ${escapeHTML(item.name)}" data-size>${item.sizes.map((size) => `<option value="${size.price}" data-label="${escapeHTML(size.label)}">${escapeHTML(size.label)} · ${pesos(size.price)}</option>`).join('')}</select><button class="add-button" type="button" data-add="${key}" aria-label="Agregar ${escapeHTML(item.name)}">+</button></div>`
      : `<div class="product-bottom"><span class="product-price">${pesos(item.price)}</span><button class="add-button" type="button" data-add="${key}" aria-label="Agregar ${escapeHTML(item.name)}">+</button></div>`;
    return `<article class="product-card" data-key="${key}" data-name="${escapeHTML(item.name)}" data-price="${item.price || ''}" data-category="${escapeHTML(category.title)}">
      <div class="product-photo"><img src="${escapeHTML(photo)}" alt="${escapeHTML(item.name)}" loading="lazy"></div>
      <div class="product-content"><div class="product-top"><h3 class="product-name">${escapeHTML(item.name)}</h3></div>
      ${item.description ? `<p class="product-desc">${escapeHTML(item.description)}</p>` : ''}
      ${options}${sizes}</div>
    </article>`;
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function addProduct(button) {
    const card = button.closest('.product-card');
    const size = card.querySelector('[data-size]');
    const option = card.querySelector('[data-option]');
    if (option && !option.value) {
      showToast('Elige una preparación para agregarlo.');
      option.focus();
      return;
    }
    const label = size?.selectedOptions[0]?.dataset.label;
    const name = [card.dataset.name, option?.value, label].filter(Boolean).join(' · ');
    const price = Number(size?.value || card.dataset.price);
    const cartKey = `${card.dataset.key}-${slug(name)}`;
    const current = cart.get(cartKey) || { key: cartKey, name, price, quantity: 0, category: card.dataset.category, icon: card.dataset.icon };
    current.quantity += 1;
    cart.set(cartKey, current);
    renderCart();
    showToast(`${card.dataset.name} agregado al pedido`);
  }

  function renderCart() {
    const count = [...cart.values()].reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('#cart-count').textContent = count;
    document.querySelector('#mobile-cart-count').textContent = count;
    const total = [...cart.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.querySelector('#cart-total').textContent = pesos(total);
    const lines = document.querySelector('#cart-lines');
    if (!count) {
      lines.innerHTML = '<p class="cart-empty">Todavía no agregas platillos. Elige algo del menú para comenzar.</p>';
      return;
    }
    lines.innerHTML = [...cart.values()].map((item) => `<div class="cart-line" data-cart-key="${escapeHTML(item.key)}">
      <div><div class="cart-line-name">${escapeHTML(item.name)}</div><div class="product-desc">${escapeHTML(item.category)} · ${pesos(item.price)} c/u</div>
      <div class="quantity-control"><button type="button" data-change="-1" aria-label="Quitar uno">−</button><span>${item.quantity}</span><button type="button" data-change="1" aria-label="Agregar uno">+</button></div></div>
      <span class="cart-line-price">${pesos(item.price * item.quantity)}</span>
    </div>`).join('');
  }

  function changeQuantity(button) {
    const line = button.closest('.cart-line');
    const key = line.dataset.cartKey;
    const item = cart.get(key);
    if (!item) return;
    item.quantity += Number(button.dataset.change);
    if (item.quantity <= 0) cart.delete(key);
    renderCart();
  }

  renderMenu();
  renderCart();
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add]');
    if (addButton) addProduct(addButton);
    const changeButton = event.target.closest('[data-change]');
    if (changeButton) changeQuantity(changeButton);
  });

  const openCart = () => {
    dialog.showModal();
    renderCart();
  };
  document.querySelector('#open-cart').addEventListener('click', openCart);
  document.querySelector('#open-cart-mobile').addEventListener('click', openCart);

  document.querySelector('#continue-order').addEventListener('click', () => {
    document.querySelector('.delivery-fieldset').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.querySelectorAll('[data-fulfillment]').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('[data-fulfillment]').forEach((option) => option.classList.remove('selected'));
    button.classList.add('selected');
    const fulfillment = document.querySelector('#fulfillment');
    fulfillment.value = button.dataset.fulfillment;
    const field = document.querySelector('#address-field');
    const needsAddress = fulfillment.value.startsWith('A domicilio');
    field.hidden = !needsAddress;
    field.querySelector('input').required = needsAddress;
  }));

  document.querySelector('#order-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!cart.size) {
      showToast('Agrega al menos un platillo a tu pedido.');
      return;
    }
    const form = event.currentTarget;
    if (!document.querySelector('#fulfillment').value) {
      showToast('Selecciona cómo quieres recibir tu pedido.');
      document.querySelector('.delivery-fieldset').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    if (!form.reportValidity()) return;
    const details = new FormData(form);
    const lines = [...cart.values()].map((item) => `• ${item.quantity} × ${item.name} — ${pesos(item.quantity * item.price)}`);
    const total = [...cart.values()].reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = [
      'MENSAJE DE MUESTRA — Mariscos Jerry',
      'Hola, quiero consultar disponibilidad para este pedido:',
      ...lines,
      `Total estimado: ${pesos(total)}`,
      `Nombre: ${details.get('name')}`,
      `Teléfono: ${details.get('phone')}`,
      `Entrega: ${details.get('fulfillment')}`,
      details.get('address') ? `Dirección: ${details.get('address')}` : '',
      `Forma de pago: ${details.get('payment')}`,
      details.get('notes') ? `Observaciones: ${details.get('notes')}` : '',
      '¿Me confirman disponibilidad, cobertura y total final?'
    ].filter(Boolean);
    const preview = document.querySelector('#order-preview');
    preview.textContent = message.join('\n');
    preview.hidden = false;
    preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast('Mensaje de muestra listo; aún no se envía al negocio.');
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.category-pill').forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  document.querySelectorAll('.menu-section').forEach((section) => sectionObserver.observe(section));

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
