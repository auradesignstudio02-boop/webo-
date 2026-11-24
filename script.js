/* script.js - استوديو المطور الرقمي */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  calculateROI();
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Modal control
function openModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function selectServiceAndOpen(serviceName) {
  const selectEl = document.getElementById('m-service');
  if (selectEl) {
    selectEl.value = serviceName;
  }
  openModal();
}

// ROI & Growth Calculator
function calculateROI() {
  const visitorsSlider = document.getElementById('visitors-slider');
  const dealSlider = document.getElementById('deal-slider');
  const conversionSlider = document.getElementById('conversion-slider');

  if (!visitorsSlider || !dealSlider || !conversionSlider) return;

  const visitors = Number(visitorsSlider.value);
  const dealVal = Number(dealSlider.value);
  const conversion = Number(conversionSlider.value);

  const visitorsValEl = document.getElementById('visitors-val');
  const dealValEl = document.getElementById('deal-val');
  const conversionValEl = document.getElementById('conversion-val');

  if (visitorsValEl) visitorsValEl.innerText = visitors.toLocaleString() + ' زائر';
  if (dealValEl) dealValEl.innerText = dealVal.toLocaleString() + ' د.ج';
  if (conversionValEl) conversionValEl.innerText = conversion.toFixed(1) + '%';

  const leads = Math.round(visitors * (conversion / 100));
  const monthlyRev = leads * dealVal;
  const annualRev = monthlyRev * 12;

  const resLeads = document.getElementById('res-leads');
  const resMonthly = document.getElementById('res-monthly');
  const resAnnual = document.getElementById('res-annual');

  if (resLeads) resLeads.innerText = leads.toLocaleString() + ' عميل';
  if (resMonthly) resMonthly.innerText = monthlyRev.toLocaleString() + ' د.ج';
  if (resAnnual) resAnnual.innerText = annualRev.toLocaleString() + ' د.ج';
}

// Secure WhatsApp submission (+213654000168 handled without showing raw number publicly on the page)
function sendToWhatsApp(name, email, phone, service, notes) {
  const part1 = "213";
  const part2 = "654000168";
  const phoneNumber = part1 + part2;

  const message = `مرحباً، أريد طلب تصميم موقع إلكتروني:%0a` +
    `- الاسم: ${encodeURIComponent(name)}%0a` +
    `- البريد: ${encodeURIComponent(email)}%0a` +
    `- الجوال: ${encodeURIComponent(phone)}%0a` +
    `- الخدمة: ${encodeURIComponent(service)}%0a` +
    `- الملاحظات: ${encodeURIComponent(notes || 'لا توجد')}`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

function handleFormSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('cf-name');
  const emailInput = document.getElementById('cf-email');
  const phoneInput = document.getElementById('cf-phone');
  const serviceInput = document.getElementById('cf-service');
  const notesInput = document.getElementById('cf-notes');

  const name = nameInput ? nameInput.value : '';
  const email = emailInput ? emailInput.value : '';
  const phone = phoneInput ? phoneInput.value : '';
  const service = serviceInput ? serviceInput.value : '';
  const notes = notesInput ? notesInput.value : '';

  sendToWhatsApp(name, email, phone, service, notes);
}

function handleModalSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById('m-name');
  const phoneInput = document.getElementById('m-phone');
  const serviceInput = document.getElementById('m-service');

  const name = nameInput ? nameInput.value : '';
  const phone = phoneInput ? phoneInput.value : '';
  const service = serviceInput ? serviceInput.value : '';
  const email = 'عبر نموذج النافذة المنبثقة';
  const notes = 'طلب استشارة وموقع إلكتروني';

  sendToWhatsApp(name, email, phone, service, notes);
  closeModal();
}
