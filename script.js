/* ============================================================
   CLINIC MANAGEMENT PLATFORM — v5.1
   Multi-department + Users + Permissions + Dynamic Pages
   + Service-based Procedures + Per-Clinic Rental Pricing
   + Cross-day Rentals + Visit with separate procedure/payment
   + Flexible Shift Mode (range / hours count)
   + Fixed: Dynamic department save (white screen bug)
   + Fixed: Age <-> Birthdate auto-sync in all forms
   ============================================================ */

'use strict';

/* ============================================================
   1) LOCALIZATION
   ============================================================ */
const translations = {
    ar: {
        'app.title': 'نظام إدارة العيادات',
        'login.subtitle': 'نظام إدارة العيادات',
        'login.username': 'اسم المستخدم',
        'login.password': 'كلمة المرور',
        'login.submit': 'تسجيل الدخول',
        'login.editCredentials': 'تعديل بيانات الدخول',
        'login.newPassword': 'كلمة المرور الجديدة',
        'login.confirmPassword': 'تأكيد كلمة المرور',
        'login.noAccess': 'لا تملك صلاحية الوصول',

        'nav.dashboard': '📊 لوحة التحكم',
        'nav.dental': '🦷 عيادة الأسنان',
        'nav.beauty': '💆 عيادة التجميل',
        'nav.rental': '🏢 تأجير العيادات',
        'nav.calendar': '📅 التقويم',
        'nav.expenses': '💰 المصروفات',
        'nav.reports': '📊 التقارير',
        'nav.backup': '💾 النسخ الاحتياطي',
        'nav.settings': '⚙️ الإعدادات',

        'dashboard.lastUpdate': 'آخر تحديث',
        'dashboard.revenueChart': '📊 الإيرادات الشهرية',
        'dashboard.expenseChart': '📉 المصروفات',
        'dashboard.recentActivity': '🔄 النشاطات الأخيرة',

        'table.name': 'الاسم', 'table.phone': 'الهاتف', 'table.age': 'العمر',
        'table.procedures': 'الإجراءات', 'table.firstVisit': 'أول زيارة',
        'table.lastVisit': 'آخر زيارة', 'table.total': 'الكلي',
        'table.paid': 'المدفوع', 'table.remaining': 'المتبقي',
        'table.actions': 'إجراءات', 'table.service': 'الخدمة',
        'table.progress': 'التقدم', 'table.lastSession': 'آخر جلسة',
        'table.clinic': 'العيادة', 'table.tenant': 'المستأجر',
        'table.date': 'التاريخ', 'table.time': 'الوقت',
        'table.hours': 'الساعات', 'table.materials': 'المواد',
        'table.status': 'الحالة', 'table.category': 'التصنيف',
        'table.amount': 'المبلغ', 'table.description': 'الوصف',
        'table.price': 'السعر', 'table.duration': 'المدة',
        'table.from': 'من', 'table.to': 'إلى',

        'patient.add': '+ إضافة مريض',
        'patient.addShort': 'إضافة مريض',
        'client.add': '+ إضافة عميل',
        'client.addShort': 'إضافة عميل',
        'beauty.add': '+ إضافة عميل',
        'rental.add': '+ إضافة حجز',
        'expense.add': '+ إضافة مصروف',

        'visit.add': '➕ إضافة زيارة',
        'visit.date': '📅 تاريخ الزيارة',
        'visit.procedure': '🦷 الإجراء',
        'visit.service': '🦷 الخدمة / الإجراء',
        'visit.selectService': '-- اختر خدمة --',
        'visit.customProcedure': '📝 أو اكتب إجراء مخصص',
        'visit.procedurePrice': '💰 سعر الإجراء',
        'visit.payment': '💳 دفعة',
        'visit.paymentOptional': '💳 دفعة (اختياري)',
        'visit.notes': '📝 ملاحظات',
        'visit.amount': '💰 المبلغ',

        'payment.add': '💰 إضافة دفعة',
        'payment.date': '📅 التاريخ',
        'payment.amount': '💰 المبلغ',
        'payment.method': '💳 طريقة الدفع',
        'payment.cash': 'كاش', 'payment.card': 'كارت',
        'payment.transfer': 'تحويل', 'payment.check': 'شيك',

        'delete.title': '⚠️ تأكيد الحذف',
        'common.save': 'حفظ', 'common.cancel': 'إلغاء',
        'common.delete': 'حذف', 'common.back': 'العودة',
        'common.print': 'طباعة', 'common.pdf': 'PDF',
        'common.edit': 'تعديل', 'common.view': 'عرض',
        'common.add': 'إضافة', 'common.disable': 'تعطيل',
        'common.enable': 'تفعيل', 'common.remove': 'إزالة',
        'common.confirm': 'تأكيد', 'common.close': 'إغلاق',
        'common.export': 'تصدير', 'common.import': 'استيراد',
        'common.none': '—',
        'common.yes': 'نعم', 'common.no': 'لا',

        'search.placeholder': '🔍 بحث بالاسم أو رقم الهاتف...',
        'search.results': '🔍 نتائج البحث',
        'search.empty': 'لا توجد نتائج لـ',
        'search.hint': '📝 أدخل اسم أو رقم هاتف للبحث',

        'calendar.today': 'اليوم',
        'calendar.noEvents': '📅 لا توجد حجوزات اليوم',
        'calendar.todayEvents': '📅 حجوزات اليوم',

        'notifications.title': '🔔 الإشعارات',
        'notifications.empty': 'لا توجد إشعارات',

        'reports.overview': '📋 نظرة عامة',
        'reports.patients': '👤 المرضى',
        'reports.financial': '💰 مالي',
        'reports.rental': '🏢 التأجير',

        'backup.export': 'تصدير', 'backup.exportDesc': 'تحميل البيانات كملف',
        'backup.import': 'استيراد', 'backup.importDesc': 'استعادة من ملف',
        'backup.restore': 'استعادة', 'backup.restoreDesc': 'استعادة النسخة التلقائية',

        'settings.tabs.clinic': '🏥 بيانات العيادة',
        'settings.tabs.branding': '🎨 الهوية البصرية',
        'settings.tabs.departments': '🧩 الأقسام',
        'settings.tabs.clinics': '🏢 العيادات',
        'settings.tabs.services': '💰 الخدمات',
        'settings.tabs.rentalPricing': '🏢 أسعار الإيجار',
        'settings.tabs.users': '👥 المستخدمون',
        'settings.tabs.system': '🛠️ النظام',

        'rentalPricing.title': '🏢 أسعار الإيجار لكل عيادة',
        'rentalPricing.desc': 'حدد أسعار الإيجار لكل عيادة بشكل مستقل. التعديلات تنعكس على الحجوزات الجديدة.',
        'rentalPricing.pricePerHour': 'سعر الساعة',
        'rentalPricing.shiftPrice': 'سعر الشيفت',
        'rentalPricing.shiftMode': 'طريقة تحديد الشيفت',
        'rentalPricing.shiftMode.range': 'نطاق (من - إلى)',
        'rentalPricing.shiftMode.hours': 'عدد ساعات',
        'rentalPricing.shiftMinHours': 'الشيفت من (ساعة)',
        'rentalPricing.shiftMaxHours': 'الشيفت إلى (ساعة)',
        'rentalPricing.shiftHours': 'مدة الشيفت (ساعات)',
        'rentalPricing.extraHourPrice': 'سعر الساعة الإضافية',
        'rentalPricing.fullDayPrice': 'سعر اليوم الكامل',
        'rentalPricing.fullDayHours': 'ساعات اليوم الكامل',
        'rentalPricing.saved': '✅ تم حفظ أسعار الإيجار',
        'rentalPricing.saveAll': '💾 حفظ كل الأسعار',
        'rentalPricing.noClinics': 'لا توجد عيادات. أضف عيادات أولاً من تاب "العيادات".',

        'toast.saved': '✅ تم الحفظ',
        'toast.deleted': '🗑️ تم الحذف',
        'toast.loginSuccess': '✅ تم تسجيل الدخول',
        'toast.loginFail': '❌ بيانات غير صحيحة',
        'toast.logout': 'تم تسجيل الخروج',
        'toast.duplicate': '⚠️ رقم الهاتف مسجل مسبقاً',
        'toast.duplicateUsername': '⚠️ اسم المستخدم مسجل مسبقاً',
        'toast.conflict': '⚠️ هذا الوقت محجوز!',
        'toast.invalidTime': '⚠️ وقت النهاية يجب أن يكون بعد البداية',
        'toast.invalidDateRange': '⚠️ تاريخ النهاية لا يمكن أن يكون قبل تاريخ البداية',
        'toast.maxDurationExceeded': '⚠️ أقصى مدة حجز هي 24 ساعة',
        'toast.passwordMismatch': '⚠️ كلمتا المرور غير متطابقتين',
        'toast.passwordShort': '⚠️ كلمة المرور 4 أحرف على الأقل',
        'toast.exported': '✅ تم التصدير',
        'toast.imported': '✅ تم الاستيراد',
        'toast.importFail': '❌ ملف غير صحيح',
        'toast.restored': '✅ تمت الاستعادة',
        'toast.noBackup': 'لا توجد نسخة احتياطية',
        'toast.loggedOut': 'تم تسجيل الخروج',
        'toast.noPermission': '⚠️ لا تملك صلاحية لهذا الإجراء',
        'toast.serviceAdded': '✅ تمت إضافة الخدمة',
        'toast.userAdded': '✅ تمت إضافة المستخدم',
        'toast.departmentAdded': '✅ تمت إضافة القسم',
        'toast.requiredFields': '⚠️ يرجى ملء جميع الحقول المطلوبة',
        'toast.cannotDeleteSelf': '⚠️ لا يمكنك حذف نفسك',
        'toast.selectService': '⚠️ اختر خدمة أولاً',
        'toast.serviceDuplicate': '⚠️ الخدمة مضافة بالفعل',
        'toast.deptNotFound': '⚠️ خطأ: القسم غير موجود',

        'permissions.title': 'الصلاحيات',
        'permissions.view': 'عرض',
        'permissions.create': 'إضافة',
        'permissions.edit': 'تعديل',
        'permissions.delete': 'حذف',
        'permissions.all': 'الكل'
    },
    en: {
        'app.title': 'Clinic Management',
        'login.subtitle': 'Clinic Management System',
        'login.username': 'Username',
        'login.password': 'Password',
        'login.submit': 'Sign In',
        'login.editCredentials': 'Edit Credentials',
        'login.newPassword': 'New Password',
        'login.confirmPassword': 'Confirm Password',
        'login.noAccess': 'You do not have access',

        'nav.dashboard': '📊 Dashboard',
        'nav.dental': '🦷 Dental',
        'nav.beauty': '💆 Beauty',
        'nav.rental': '🏢 Rental',
        'nav.calendar': '📅 Calendar',
        'nav.expenses': '💰 Expenses',
        'nav.reports': '📊 Reports',
        'nav.backup': '💾 Backup',
        'nav.settings': '⚙️ Settings',

        'dashboard.lastUpdate': 'Last update',
        'dashboard.revenueChart': '📊 Monthly Revenue',
        'dashboard.expenseChart': '📉 Expenses',
        'dashboard.recentActivity': '🔄 Recent Activity',

        'table.name': 'Name', 'table.phone': 'Phone', 'table.age': 'Age',
        'table.procedures': 'Procedures', 'table.firstVisit': 'First Visit',
        'table.lastVisit': 'Last Visit', 'table.total': 'Total',
        'table.paid': 'Paid', 'table.remaining': 'Remaining',
        'table.actions': 'Actions', 'table.service': 'Service',
        'table.progress': 'Progress', 'table.lastSession': 'Last Session',
        'table.clinic': 'Clinic', 'table.tenant': 'Tenant',
        'table.date': 'Date', 'table.time': 'Time',
        'table.hours': 'Hours', 'table.materials': 'Materials',
        'table.status': 'Status', 'table.category': 'Category',
        'table.amount': 'Amount', 'table.description': 'Description',
        'table.price': 'Price', 'table.duration': 'Duration',
        'table.from': 'From', 'table.to': 'To',

        'patient.add': '+ Add Patient',
        'patient.addShort': 'Add Patient',
        'client.add': '+ Add Client',
        'client.addShort': 'Add Client',
        'beauty.add': '+ Add Client',
        'rental.add': '+ Add Booking',
        'expense.add': '+ Add Expense',

        'visit.add': '➕ Add Visit',
        'visit.date': '📅 Visit Date',
        'visit.procedure': '🦷 Procedure',
        'visit.service': '🦷 Service / Procedure',
        'visit.selectService': '-- Select a service --',
        'visit.customProcedure': '📝 Or type a custom procedure',
        'visit.procedurePrice': '💰 Procedure Price',
        'visit.payment': '💳 Payment',
        'visit.paymentOptional': '💳 Payment (optional)',
        'visit.notes': '📝 Notes',
        'visit.amount': '💰 Amount',

        'payment.add': '💰 Add Payment',
        'payment.date': '📅 Date',
        'payment.amount': '💰 Amount',
        'payment.method': '💳 Method',
        'payment.cash': 'Cash', 'payment.card': 'Card',
        'payment.transfer': 'Transfer', 'payment.check': 'Check',

        'delete.title': '⚠️ Confirm Delete',
        'common.save': 'Save', 'common.cancel': 'Cancel',
        'common.delete': 'Delete', 'common.back': 'Back',
        'common.print': 'Print', 'common.pdf': 'PDF',
        'common.edit': 'Edit', 'common.view': 'View',
        'common.add': 'Add', 'common.disable': 'Disable',
        'common.enable': 'Enable', 'common.remove': 'Remove',
        'common.confirm': 'Confirm', 'common.close': 'Close',
        'common.export': 'Export', 'common.import': 'Import',
        'common.none': '—',
        'common.yes': 'Yes', 'common.no': 'No',

        'search.placeholder': '🔍 Search by name or phone...',
        'search.results': '🔍 Search Results',
        'search.empty': 'No results for',
        'search.hint': '📝 Enter a name or phone to search',

        'calendar.today': 'Today',
        'calendar.noEvents': '📅 No bookings today',
        'calendar.todayEvents': '📅 Today\'s bookings',

        'notifications.title': '🔔 Notifications',
        'notifications.empty': 'No notifications',

        'reports.overview': '📋 Overview',
        'reports.patients': '👤 Patients',
        'reports.financial': '💰 Financial',
        'reports.rental': '🏢 Rental',

        'backup.export': 'Export', 'backup.exportDesc': 'Download data as file',
        'backup.import': 'Import', 'backup.importDesc': 'Restore from file',
        'backup.restore': 'Restore', 'backup.restoreDesc': 'Restore auto backup',

        'settings.tabs.clinic': '🏥 Clinic Info',
        'settings.tabs.branding': '🎨 Branding',
        'settings.tabs.departments': '🧩 Departments',
        'settings.tabs.clinics': '🏢 Clinics',
        'settings.tabs.services': '💰 Services',
        'settings.tabs.rentalPricing': '🏢 Rental Pricing',
        'settings.tabs.users': '👥 Users',
        'settings.tabs.system': '🛠️ System',

        'rentalPricing.title': '🏢 Rental Pricing per Clinic',
        'rentalPricing.desc': 'Set rental prices for each clinic independently. Changes apply to new bookings.',
        'rentalPricing.pricePerHour': 'Price per Hour',
        'rentalPricing.shiftPrice': 'Shift Price',
        'rentalPricing.shiftMode': 'Shift Mode',
        'rentalPricing.shiftMode.range': 'Range (from - to)',
        'rentalPricing.shiftMode.hours': 'Hours Count',
        'rentalPricing.shiftMinHours': 'Shift Min (hours)',
        'rentalPricing.shiftMaxHours': 'Shift Max (hours)',
        'rentalPricing.shiftHours': 'Shift Duration (hours)',
        'rentalPricing.extraHourPrice': 'Extra Hour Price',
        'rentalPricing.fullDayPrice': 'Full Day Price',
        'rentalPricing.fullDayHours': 'Full Day Hours',
        'rentalPricing.saved': '✅ Rental prices saved',
        'rentalPricing.saveAll': '💾 Save All Prices',
        'rentalPricing.noClinics': 'No clinics found. Add clinics first from "Clinics" tab.',

        'toast.saved': '✅ Saved',
        'toast.deleted': '🗑️ Deleted',
        'toast.loginSuccess': '✅ Logged in',
        'toast.loginFail': '❌ Invalid credentials',
        'toast.logout': 'Logged out',
        'toast.duplicate': '⚠️ Phone already registered',
        'toast.duplicateUsername': '⚠️ Username already exists',
        'toast.conflict': '⚠️ This time is booked!',
        'toast.invalidTime': '⚠️ End time must be after start',
        'toast.invalidDateRange': '⚠️ End date cannot be before start date',
        'toast.maxDurationExceeded': '⚠️ Maximum booking is 24 hours',
        'toast.passwordMismatch': '⚠️ Passwords do not match',
        'toast.passwordShort': '⚠️ Password must be at least 4 characters',
        'toast.exported': '✅ Exported',
        'toast.imported': '✅ Imported',
        'toast.importFail': '❌ Invalid file',
        'toast.restored': '✅ Restored',
        'toast.noBackup': 'No backup found',
        'toast.loggedOut': 'Logged out',
        'toast.noPermission': '⚠️ No permission for this action',
        'toast.serviceAdded': '✅ Service added',
        'toast.userAdded': '✅ User added',
        'toast.departmentAdded': '✅ Department added',
        'toast.requiredFields': '⚠️ Please fill all required fields',
        'toast.cannotDeleteSelf': '⚠️ You cannot delete yourself',
        'toast.selectService': '⚠️ Select a service first',
        'toast.serviceDuplicate': '⚠️ Service already added',
        'toast.deptNotFound': '⚠️ Error: department not found',

        'permissions.title': 'Permissions',
        'permissions.view': 'View',
        'permissions.create': 'Create',
        'permissions.edit': 'Edit',
        'permissions.delete': 'Delete',
        'permissions.all': 'All'
    }
};

let currentLang = 'ar';
function t(key) { return (translations[currentLang] && translations[currentLang][key]) || key; }

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (val) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = t(key);
        if (val) el.setAttribute('placeholder', val);
    });
    document.title = t('app.title');
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    const arBtn = document.getElementById('langArBtn');
    const enBtn = document.getElementById('langEnBtn');
    if (arBtn) arBtn.classList.toggle('active', currentLang === 'ar');
    if (enBtn) enBtn.classList.toggle('active', currentLang === 'en');
}

function setLanguage(lang) {
    currentLang = translations[lang] ? lang : 'ar';
    try { localStorage.setItem('clinicLang', currentLang); } catch(e){}
    applyTranslations();
    if (state.loggedIn) {
        renderSidebar();
        renderAll();
        renderDynamicPages();
    }
}

/* ============================================================
   2) CONSTANTS
   ============================================================ */
const STORAGE_KEYS = {
    data: 'clinicData',
    credentials: 'clinicCredentials',
    session: 'clinicSession',
    currentUser: 'clinicCurrentUser',
    theme: 'clinicTheme',
    lang: 'clinicLang',
    autoBackup: 'clinicBackup',
    preMigration: 'clinicData_preMigration'
};
const CURRENT_SCHEMA_VERSION = 5;
const DEFAULT_CURRENCY = 'ج.م';

function defaultClinicPricing() {
    return {
        pricePerHour: 200,
        shiftPrice: 500,
        shiftMode: 'range',
        shiftMinHours: 3,
        shiftMaxHours: 5,
        shiftHours: 4,
        extraHourPrice: 200,
        fullDayPrice: 1500,
        fullDayHours: 10
    };
}

const DEPARTMENT_ICONS = [
    'fa-tooth', 'fa-spa', 'fa-building', 'fa-stethoscope', 'fa-pills',
    'fa-brain', 'fa-eye', 'fa-bone', 'fa-heart-pulse', 'fa-baby',
    'fa-paw', 'fa-microscope', 'fa-syringe', 'fa-hospital', 'fa-user-md',
    'fa-lungs', 'fa-hand-holding-medical', 'fa-dna', 'fa-x-ray', 'fa-weight-scale',
    'fa-wheelchair', 'fa-notes-medical', 'fa-clinic-medical', 'fa-heartbeat', 'fa-allergies',
    'fa-vial', 'fa-flask', 'fa-bandage', 'fa-capsules', 'fa-thermometer'
];

const PERMISSION_MODULES = [
    { key: 'dashboard',   labelAr: 'لوحة التحكم', labelEn: 'Dashboard' },
    { key: 'dental',      labelAr: 'عيادة الأسنان', labelEn: 'Dental' },
    { key: 'beauty',      labelAr: 'عيادة التجميل', labelEn: 'Beauty' },
    { key: 'rental',      labelAr: 'تأجير العيادات', labelEn: 'Rental' },
    { key: 'calendar',    labelAr: 'التقويم', labelEn: 'Calendar' },
    { key: 'expenses',    labelAr: 'المصروفات', labelEn: 'Expenses' },
    { key: 'reports',     labelAr: 'التقارير', labelEn: 'Reports' },
    { key: 'backup',      labelAr: 'النسخ الاحتياطي', labelEn: 'Backup' },
    { key: 'settings',    labelAr: 'الإعدادات', labelEn: 'Settings' },
    { key: 'users',       labelAr: 'إدارة المستخدمين', labelEn: 'User Management' }
];

/* ============================================================
   3) STATE
   ============================================================ */
const state = {
    data: null,
    loggedIn: false,
    currentUser: null,
    editingPatientId: null,
    editingId: null,
    formType: null,
    currentPatientId: null,
    currentDynamicDept: null,
    deleteTarget: null,
    deleteType: null,
    currentMonth: new Date(),
    charts: { revenue: null, expense: null },
    materialsList: [],
    selectedServicesList: [],
    backupInterval: null,
    settingsTab: 'clinic',
    selectedDeptIcon: 'fa-stethoscope'
};

/* ============================================================
   4) UTILITIES
   ============================================================ */
function $(id) { return document.getElementById(id); }
function $$(sel) { return document.querySelectorAll(sel); }

function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function todayStr() {
    return new Date().toISOString().split('T')[0];
}

function formatCurrency(n) {
    const currency = state.data?.config?.clinicInfo?.currency || DEFAULT_CURRENCY;
    const num = Number(n) || 0;
    return `${currency} ${num.toLocaleString()}`;
}

function safeNumber(v) {
    const n = parseFloat(v);
    return isNaN(n) ? 0 : n;
}

function debounce(fn, wait) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), wait);
    };
}

function parseDateTime(dateStr, timeStr) {
    if (!dateStr || !timeStr) return null;
    const [y, m, d] = dateStr.split('-').map(Number);
    const [hh, mm] = timeStr.split(':').map(Number);
    return new Date(y, m - 1, d, hh, mm, 0, 0);
}

function hoursBetween(d1, d2) {
    if (!d1 || !d2) return 0;
    return (d2.getTime() - d1.getTime()) / (1000 * 60 * 60);
}

/* Normalize pricing object */
function normalizePricing(p) {
    const def = defaultClinicPricing();
    const out = Object.assign({}, def, p || {});
    if (out.shiftMode !== 'range' && out.shiftMode !== 'hours') {
        out.shiftMode = 'range';
    }
    if (out.shiftHours === undefined || out.shiftHours === null) {
        out.shiftHours = safeNumber(out.shiftMaxHours) || def.shiftHours;
    }
    return out;
}

/* ⭐ حساب العمر من تاريخ الميلاد */
function calculateAgeFromBirth(birthDate) {
    if (!birthDate) return 0;
    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) return 0;
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
    return age >= 0 ? age : 0;
}

/* ⭐ حساب تاريخ الميلاد من العمر */
function calculateBirthFromAge(age) {
    const now = new Date();
    const year = now.getFullYear() - parseInt(age);
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${year}-${m}-${d}`;
}

/* ⭐ المزامنة التلقائية: العمر ↔ تاريخ الميلاد */
function updateAgeFromYears() {
    const ageInput = $('p_age');
    if (!ageInput) return;
    const ageVal = ageInput.value.trim();
    const bd = $('p_birthDate');
    if (!bd) return;
    if (ageVal === '') {
        bd.value = '';
        return;
    }
    const age = parseInt(ageVal);
    if (isNaN(age) || age < 0 || age > 150) return;
    bd.value = calculateBirthFromAge(age);
}

function updateAgeFromBirth() {
    const birth = $('p_birthDate')?.value;
    const ageEl = $('p_age');
    if (!ageEl) return;
    if (!birth) {
        ageEl.value = '';
        return;
    }
    ageEl.value = calculateAgeFromBirth(birth);
}

/* ============================================================
   5) DATA LAYER
   ============================================================ */
function defaultData() {
    return {
        schemaVersion: CURRENT_SCHEMA_VERSION,
        patients: [],
        beauty: [],
        rentals: [],
        expenses: [],
        activities: [],
        notifications: [],
        departmentsData: {},
        config: {
            clinicInfo: {
                nameAr: 'Unique Dental',
                nameEn: 'Unique Dental',
                tagline: 'نظام إدارة العيادات',
                logo: '🦷',
                phone: '',
                whatsapp: '',
                email: '',
                address: '',
                website: '',
                workingHours: '',
                currency: 'ج.م',
                dateFormat: 'YYYY-MM-DD',
                timeFormat: '24h'
            },
            branding: {
                primary: '#0D9488',
                secondary: '#6366F1',
                accent: '#F59E0B',
                sidebarStyle: 'default'
            },
            rentalPrices: defaultClinicPricing(),
            departments: [
                { id: 'dental', nameAr: 'عيادة الأسنان', nameEn: 'Dental', icon: 'fa-tooth', pageId: 'dental', enabled: true, order: 1, builtIn: true, entityType: 'patient' },
                { id: 'beauty', nameAr: 'عيادة التجميل', nameEn: 'Beauty', icon: 'fa-spa', pageId: 'beauty', enabled: true, order: 2, builtIn: true, entityType: 'client' },
                { id: 'rental', nameAr: 'تأجير العيادات', nameEn: 'Rental', icon: 'fa-building', pageId: 'rental', enabled: true, order: 3, builtIn: true, entityType: 'client' }
            ],
            clinics: [
                { id: 'clinic-1', name: 'عيادة 1', type: 'dental', code: 'C1', doctor: '', status: 'active', color: '#0D9488', hours: '', services: [], order: 1, pricing: defaultClinicPricing() },
                { id: 'clinic-2', name: 'عيادة 2', type: 'dental', code: 'C2', doctor: '', status: 'active', color: '#6366F1', hours: '', services: [], order: 2, pricing: defaultClinicPricing() },
                { id: 'clinic-3', name: 'عيادة 3', type: 'dental', code: 'C3', doctor: '', status: 'active', color: '#F59E0B', hours: '', services: [], order: 3, pricing: defaultClinicPricing() },
                { id: 'clinic-4', name: 'عيادة 4', type: 'dental', code: 'C4', doctor: '', status: 'active', color: '#22C55E', hours: '', services: [], order: 4, pricing: defaultClinicPricing() },
                { id: 'clinic-5', name: 'عيادة 5', type: 'dental', code: 'C5', doctor: '', status: 'active', color: '#EF4444', hours: '', services: [], order: 5, pricing: defaultClinicPricing() }
            ],
            services: [],
            users: [
                {
                    id: 'user-admin',
                    username: 'admin',
                    password: '123456',
                    displayName: 'Admin',
                    active: true,
                    isAdmin: true,
                    permissions: {}
                }
            ]
        }
    };
}

function fullPermissions() {
    const p = {};
    PERMISSION_MODULES.forEach(m => {
        p[m.key] = { view: true, create: true, edit: true, delete: true };
    });
    return p;
}

function emptyPermissions() {
    const p = {};
    PERMISSION_MODULES.forEach(m => {
        p[m.key] = { view: false, create: false, edit: false, delete: false };
    });
    return p;
}

function normalizePermissions(perms) {
    const out = emptyPermissions();
    if (!perms) return out;
    Object.keys(perms).forEach(k => {
        if (out[k]) {
            const v = perms[k] || {};
            out[k] = {
                view: !!v.view,
                create: !!v.create,
                edit: !!v.edit,
                delete: !!v.delete
            };
        }
    });
    return out;
}

/* ---- Migrations (v1 → v5) ---- */
function migrateV1ToV2(oldData) {
    const d = defaultData();
    if (Array.isArray(oldData.patients)) d.patients = oldData.patients;
    if (Array.isArray(oldData.beauty)) d.beauty = oldData.beauty;
    if (Array.isArray(oldData.rentals)) d.rentals = oldData.rentals;
    if (Array.isArray(oldData.expenses)) d.expenses = oldData.expenses;
    if (Array.isArray(oldData.activities)) d.activities = oldData.activities;
    if (Array.isArray(oldData.notifications)) d.notifications = oldData.notifications;

    if (oldData.rentalPrices) {
        d.config.rentalPrices = Object.assign({}, defaultClinicPricing(), {
            pricePerHour: oldData.rentalPrices.pricePerHour ?? 200,
            shiftPrice: oldData.rentalPrices.shiftPrice ?? 500,
            extraHourPrice: oldData.rentalPrices.extraHourPrice ?? 200
        });
    }

    d.patients.forEach(p => {
        if (!Array.isArray(p.visits)) p.visits = [];
        if (!Array.isArray(p.payments)) p.payments = [];
        if (!Array.isArray(p.procedures)) p.procedures = [];
        if (p.remaining === undefined) p.remaining = Math.max(0, (p.totalAmount||0) - (p.paidAmount||0));
    });
    d.beauty.forEach(b => {
        if (!Array.isArray(b.visits)) b.visits = [];
        if (!Array.isArray(b.payments)) b.payments = [];
        if (b.remaining === undefined) b.remaining = Math.max(0, (b.totalAmount||0) - (b.paidAmount||0));
    });
    d.rentals.forEach(r => {
        if (!Array.isArray(r.materials)) r.materials = [];
    });

    d.schemaVersion = 2;
    return d;
}

function migrateV2ToV3(oldData) {
    const d = defaultData();
    d.patients = Array.isArray(oldData.patients) ? oldData.patients : [];
    d.beauty = Array.isArray(oldData.beauty) ? oldData.beauty : [];
    d.rentals = Array.isArray(oldData.rentals) ? oldData.rentals : [];
    d.expenses = Array.isArray(oldData.expenses) ? oldData.expenses : [];
    d.activities = Array.isArray(oldData.activities) ? oldData.activities : [];
    d.notifications = Array.isArray(oldData.notifications) ? oldData.notifications : [];
    d.departmentsData = oldData.departmentsData || {};

    if (oldData.config) {
        d.config = Object.assign({}, defaultData().config, oldData.config);
        d.config.clinicInfo = Object.assign({}, defaultData().config.clinicInfo, oldData.config.clinicInfo || {});
        d.config.branding = Object.assign({}, defaultData().config.branding, oldData.config.branding || {});
        d.config.rentalPrices = normalizePricing(oldData.config.rentalPrices);
        d.config.departments = Array.isArray(oldData.config.departments) && oldData.config.departments.length
            ? oldData.config.departments : defaultData().config.departments;
        d.config.clinics = Array.isArray(oldData.config.clinics) && oldData.config.clinics.length
            ? oldData.config.clinics : defaultData().config.clinics;
        d.config.services = Array.isArray(oldData.config.services) ? oldData.config.services : [];
    }

    d.config.departments.forEach(dep => {
        if (!dep.entityType) dep.entityType = dep.id === 'dental' ? 'patient' : 'client';
        if (dep.builtIn === undefined) dep.builtIn = ['dental','beauty','rental'].includes(dep.id);
    });

    const oldUsers = (oldData.config && oldData.config.users) || [];
    if (oldUsers.length === 0) {
        d.config.users = [{
            id: 'user-admin', username: 'admin', password: '123456',
            displayName: 'Admin', active: true, isAdmin: true,
            permissions: fullPermissions()
        }];
    } else {
        d.config.users = oldUsers.map((u, idx) => ({
            id: u.id || generateId(),
            username: u.username || ('user' + idx),
            password: u.password || '123456',
            displayName: u.displayName || u.username || 'User',
            active: u.active !== false,
            isAdmin: !!u.isAdmin || (u.username === 'admin'),
            permissions: normalizePermissions(u.permissions)
        }));
    }

    if (!d.config.users.some(u => u.isAdmin)) {
        d.config.users.unshift({
            id: 'user-admin', username: 'admin', password: '123456',
            displayName: 'Admin', active: true, isAdmin: true,
            permissions: fullPermissions()
        });
    }

    d.config.users.forEach(u => {
        u.permissions = normalizePermissions(u.permissions);
        if (u.isAdmin) u.permissions = fullPermissions();
    });

    d.schemaVersion = 3;
    return d;
}

function migrateV3ToV4(oldData) {
    const d = defaultData();
    d.patients = Array.isArray(oldData.patients) ? oldData.patients : [];
    d.beauty = Array.isArray(oldData.beauty) ? oldData.beauty : [];
    d.rentals = Array.isArray(oldData.rentals) ? oldData.rentals : [];
    d.expenses = Array.isArray(oldData.expenses) ? oldData.expenses : [];
    d.activities = Array.isArray(oldData.activities) ? oldData.activities : [];
    d.notifications = Array.isArray(oldData.notifications) ? oldData.notifications : [];
    d.departmentsData = oldData.departmentsData || {};

    if (oldData.config) {
        d.config = Object.assign({}, defaultData().config, oldData.config);
        d.config.clinicInfo = Object.assign({}, defaultData().config.clinicInfo, oldData.config.clinicInfo || {});
        d.config.branding = Object.assign({}, defaultData().config.branding, oldData.config.branding || {});
        d.config.rentalPrices = normalizePricing(oldData.config.rentalPrices);
        d.config.departments = Array.isArray(oldData.config.departments) && oldData.config.departments.length
            ? oldData.config.departments : defaultData().config.departments;
        d.config.clinics = Array.isArray(oldData.config.clinics) && oldData.config.clinics.length
            ? oldData.config.clinics : defaultData().config.clinics;
        d.config.services = Array.isArray(oldData.config.services) ? oldData.config.services : [];
        d.config.users = Array.isArray(oldData.config.users) ? oldData.config.users : defaultData().config.users;
    }

    d.config.clinics.forEach(c => {
        c.pricing = normalizePricing(c.pricing);
    });

    d.config.departments.forEach(dep => {
        if (!dep.entityType) dep.entityType = dep.id === 'dental' ? 'patient' : 'client';
        if (dep.builtIn === undefined) dep.builtIn = ['dental','beauty','rental'].includes(dep.id);
    });
    d.config.users.forEach(u => {
        u.permissions = normalizePermissions(u.permissions);
        if (u.isAdmin) u.permissions = fullPermissions();
    });

    d.patients.forEach(p => {
        if (!Array.isArray(p.visits)) p.visits = [];
        p.visits = p.visits.map(v => {
            if (v.procedurePrice === undefined && v.payment === undefined) {
                const procedurePrice = v.remainingAmount > 0 ? v.remainingAmount : 0;
                const payment = v.amount > 0 ? v.amount : 0;
                return {
                    date: v.date, procedure: v.procedure || '',
                    procedurePrice, payment, notes: v.notes || ''
                };
            }
            return v;
        });
        if (!Array.isArray(p.procedures)) p.procedures = [];
    });

    d.rentals.forEach(r => {
        if (!r.startDate) {
            r.startDate = r.date || todayStr();
            r.endDate = r.date || todayStr();
            r.startTime = r.startTime || '09:00';
            r.endTime = r.endTime || '12:00';
            if (r.endTime <= r.startTime) {
                const [y,m,dd] = r.startDate.split('-').map(Number);
                const next = new Date(y, m-1, dd + 1);
                r.endDate = next.toISOString().split('T')[0];
            }
        }
        if (!r.materials) r.materials = [];
        r.pricing = normalizePricing(r.pricing);
    });

    d.beauty.forEach(b => {
        if (!Array.isArray(b.visits)) b.visits = [];
        if (!Array.isArray(b.payments)) b.payments = [];
    });

    Object.values(d.departmentsData || {}).forEach(dd => {
        (dd.items || []).forEach(it => {
            if (!Array.isArray(it.visits)) it.visits = [];
            if (!Array.isArray(it.payments)) it.payments = [];
            it.visits = it.visits.map(v => {
                if (v.procedurePrice === undefined && v.payment === undefined) {
                    const procedurePrice = v.remainingAmount > 0 ? v.remainingAmount : 0;
                    const payment = v.amount > 0 ? v.amount : 0;
                    return {
                        date: v.date, procedure: v.procedure || '',
                        procedurePrice, payment, notes: v.notes || ''
                    };
                }
                return v;
            });
        });
    });

    d.schemaVersion = 4;
    return d;
}

function migrateV4ToV5(oldData) {
    const d = defaultData();
    d.patients = Array.isArray(oldData.patients) ? oldData.patients : [];
    d.beauty = Array.isArray(oldData.beauty) ? oldData.beauty : [];
    d.rentals = Array.isArray(oldData.rentals) ? oldData.rentals : [];
    d.expenses = Array.isArray(oldData.expenses) ? oldData.expenses : [];
    d.activities = Array.isArray(oldData.activities) ? oldData.activities : [];
    d.notifications = Array.isArray(oldData.notifications) ? oldData.notifications : [];
    d.departmentsData = oldData.departmentsData || {};

    if (oldData.config) {
        d.config = Object.assign({}, defaultData().config, oldData.config);
        d.config.clinicInfo = Object.assign({}, defaultData().config.clinicInfo, oldData.config.clinicInfo || {});
        d.config.branding = Object.assign({}, defaultData().config.branding, oldData.config.branding || {});
        d.config.rentalPrices = normalizePricing(oldData.config.rentalPrices);
        d.config.departments = Array.isArray(oldData.config.departments) && oldData.config.departments.length
            ? oldData.config.departments : defaultData().config.departments;
        d.config.clinics = Array.isArray(oldData.config.clinics) && oldData.config.clinics.length
            ? oldData.config.clinics : defaultData().config.clinics;
        d.config.services = Array.isArray(oldData.config.services) ? oldData.config.services : [];
        d.config.users = Array.isArray(oldData.config.users) ? oldData.config.users : defaultData().config.users;
    }

    d.config.clinics.forEach(c => { c.pricing = normalizePricing(c.pricing); });
    d.rentals.forEach(r => { r.pricing = normalizePricing(r.pricing); });

    d.config.departments.forEach(dep => {
        if (!dep.entityType) dep.entityType = dep.id === 'dental' ? 'patient' : 'client';
        if (dep.builtIn === undefined) dep.builtIn = ['dental','beauty','rental'].includes(dep.id);
    });

    d.config.users.forEach(u => {
        u.permissions = normalizePermissions(u.permissions);
        if (u.isAdmin) u.permissions = fullPermissions();
    });

    d.schemaVersion = 5;
    return d;
}

function detectAndMigrate(rawData) {
    if (!rawData || typeof rawData !== 'object') {
        return { data: defaultData(), migrated: false };
    }
    const version = rawData.schemaVersion || 1;

    if (version >= CURRENT_SCHEMA_VERSION) {
        const merged = defaultData();
        merged.patients = Array.isArray(rawData.patients) ? rawData.patients : [];
        merged.beauty = Array.isArray(rawData.beauty) ? rawData.beauty : [];
        merged.rentals = Array.isArray(rawData.rentals) ? rawData.rentals : [];
        merged.expenses = Array.isArray(rawData.expenses) ? rawData.expenses : [];
        merged.activities = Array.isArray(rawData.activities) ? rawData.activities : [];
        merged.notifications = Array.isArray(rawData.notifications) ? rawData.notifications : [];
        merged.departmentsData = rawData.departmentsData || {};

        if (rawData.config) {
            merged.config = Object.assign({}, merged.config, rawData.config);
            merged.config.clinicInfo = Object.assign({}, defaultData().config.clinicInfo, rawData.config.clinicInfo || {});
            merged.config.branding = Object.assign({}, defaultData().config.branding, rawData.config.branding || {});
            merged.config.rentalPrices = normalizePricing(rawData.config.rentalPrices);
            merged.config.departments = Array.isArray(rawData.config.departments) && rawData.config.departments.length
                ? rawData.config.departments : defaultData().config.departments;
            merged.config.clinics = Array.isArray(rawData.config.clinics) && rawData.config.clinics.length
                ? rawData.config.clinics : defaultData().config.clinics;
            merged.config.services = Array.isArray(rawData.config.services) ? rawData.config.services : [];
            merged.config.users = Array.isArray(rawData.config.users) && rawData.config.users.length
                ? rawData.config.users : defaultData().config.users;
        }

        merged.config.departments.forEach(dep => {
            if (!dep.entityType) dep.entityType = dep.id === 'dental' ? 'patient' : 'client';
            if (dep.builtIn === undefined) dep.builtIn = ['dental','beauty','rental'].includes(dep.id);
        });
        merged.config.users.forEach(u => {
            u.permissions = normalizePermissions(u.permissions);
            if (u.isAdmin) u.permissions = fullPermissions();
        });
        merged.config.clinics.forEach(c => { c.pricing = normalizePricing(c.pricing); });
        merged.rentals.forEach(r => { r.pricing = normalizePricing(r.pricing); });

        merged.schemaVersion = CURRENT_SCHEMA_VERSION;
        return { data: merged, migrated: false };
    }

    try {
        localStorage.setItem(STORAGE_KEYS.preMigration, JSON.stringify(rawData));
    } catch(e) { }

    let working = rawData;
    if (version < 2) working = migrateV1ToV2(working);
    if ((working.schemaVersion || 2) < 3) working = migrateV2ToV3(working);
    if ((working.schemaVersion || 3) < 4) working = migrateV3ToV4(working);
    if ((working.schemaVersion || 4) < 5) working = migrateV4ToV5(working);

    return { data: working, migrated: true };
}

/* ============================================================
   6) STORAGE
   ============================================================ */
function loadData() {
    let raw = null;
    try {
        const s = localStorage.getItem(STORAGE_KEYS.data);
        if (s) raw = JSON.parse(s);
    } catch(e) { raw = null; }

    if (raw) {
        const { data: migrated, migrated: didMigrate } = detectAndMigrate(raw);
        state.data = migrated;
        if (didMigrate) {
            saveData();
            showToast('✅ تم ترحيل البيانات بنجاح إلى الإصدار ' + CURRENT_SCHEMA_VERSION, 'success', 4000);
        }
    } else {
        state.data = defaultData();
        seedDemoData(state.data);
        saveData();
    }
}

function saveData() {
    if (!state.data) return;
    try {
        localStorage.setItem(STORAGE_KEYS.data, JSON.stringify(state.data));
    } catch(e) {
        console.error('Storage failed', e);
        showToast('⚠️ تعذّر الحفظ - الذاكرة ممتلئة', 'error');
    }
    const now = new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
    const lu = $('lastUpdateTime'); if (lu) lu.textContent = now;
    const lb = $('lastBackupTime'); if (lb) lb.textContent = (currentLang === 'ar' ? 'آخر نسخة: ' : 'Last backup: ') + now;
}

function seedDemoData(d) {
    const today = todayStr();
    d.patients = [{
        id: generateId(), name: 'أحمد محمد', phone: '01001234567', age: 35,
        birthDate: '1989-05-15', gender: 'ذكر',
        totalAmount: 2000, paidAmount: 1500, remaining: 500,
        procedures: ['تنظيف جير'],
        visits: [{
            date: today, procedure: 'تنظيف جير',
            procedurePrice: 2000, payment: 1500, notes: ''
        }],
        payments: [{ date: today, amount: 1500, method: 'كاش' }],
        firstVisit: today, notes: ''
    }];
}

/* ============================================================
   7) TOAST
   ============================================================ */
const toastQueue = [];
let toastActive = false;
function showToast(message, type = 'info', duration = 3000) {
    toastQueue.push({ message, type, duration });
    if (!toastActive) drainToast();
}
function drainToast() {
    const item = toastQueue.shift();
    if (!item) { toastActive = false; return; }
    toastActive = true;
    const el = $('toast');
    if (!el) { toastActive = false; return; }
    el.textContent = item.message;
    el.className = 'toast show ' + item.type;
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => {
        el.classList.remove('show');
        setTimeout(drainToast, 200);
    }, item.duration);
}

/* ============================================================
   8) MODAL SYSTEM
   ============================================================ */
function openModal(id) {
    const m = $(id);
    if (!m) return;
    m.classList.add('show');
    const focusEl = m.querySelector('input:not([type="hidden"]),select,textarea,button');
    if (focusEl) setTimeout(() => focusEl.focus(), 50);
}
function closeModalById(id) {
    const m = $(id);
    if (m) m.classList.remove('show');
}
function closeAllModals() {
    $$('.modal').forEach(m => m.classList.remove('show'));
}
document.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
    const closeBtn = e.target.closest('[data-close-modal]');
    if (closeBtn) {
        const id = closeBtn.getAttribute('data-close-modal');
        closeModalById(id);
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
});

/* ============================================================
   9) PERMISSIONS
   ============================================================ */
function hasPermission(module, operation) {
    if (!state.currentUser) return false;
    if (state.currentUser.isAdmin) return true;
    const perms = state.currentUser.permissions || {};
    const mod = perms[module];
    if (!mod) return false;
    return !!mod[operation];
}

function canView(module) { return hasPermission(module, 'view'); }
function canCreate(module) { return hasPermission(module, 'create'); }
function canEdit(module) { return hasPermission(module, 'edit'); }
function canDelete(module) { return hasPermission(module, 'delete'); }

/* ============================================================
   10) AUTH
   ============================================================ */
function handleLogin(e) {
    if (e) e.preventDefault();
    const username = ($('loginUser')?.value || '').trim();
    const password = ($('loginPass')?.value || '').trim();

    if (!username || !password) {
        showToast('⚠️ يرجى إدخال اسم المستخدم وكلمة المرور', 'error');
        return;
    }

    const user = (state.data.config.users || []).find(u =>
        u.username === username && u.password === password
    );

    if (!user) {
        showToast(t('toast.loginFail'), 'error');
        return;
    }

    if (user.active === false) {
        showToast('⏸️ هذا الحساب معطّل. تواصل مع المدير.', 'error');
        return;
    }

    state.currentUser = {
        id: user.id, username: user.username,
        displayName: user.displayName || user.username,
        isAdmin: !!user.isAdmin,
        permissions: user.isAdmin ? fullPermissions() : normalizePermissions(user.permissions)
    };
    state.loggedIn = true;

    try {
        localStorage.setItem(STORAGE_KEYS.session, 'true');
        localStorage.setItem(STORAGE_KEYS.currentUser, user.id);
    } catch(err){}

    $('loginScreen').style.display = 'none';
    $('mainApp').style.display = 'block';
    $('userNameHeader').textContent = state.currentUser.displayName;

    applyBranding();
    renderSidebar();
    renderAll();
    startAutoBackup();
    generateNotifications();
    addActivity('تسجيل الدخول', `تم تسجيل الدخول كـ ${state.currentUser.displayName}`);
    showToast(t('toast.loginSuccess'), 'success');
}

function handleLogout() {
    if (!confirm(t('toast.logout') + '?')) return;
    state.loggedIn = false;
    state.currentUser = null;
    $('loginScreen').style.display = 'flex';
    $('mainApp').style.display = 'none';
    if (state.backupInterval) { clearInterval(state.backupInterval); state.backupInterval = null; }
    try {
        localStorage.removeItem(STORAGE_KEYS.session);
        localStorage.removeItem(STORAGE_KEYS.currentUser);
    } catch(e){}
    showToast(t('toast.loggedOut'), 'warning');
}

function openLoginSettings() {
    if (!state.currentUser) return;
    const u = $('newUsername'), p = $('newPassword'), c = $('confirmPassword');
    if (u) u.value = state.currentUser.username;
    if (p) p.value = '';
    if (c) c.value = '';
    openModal('loginSettingsModal');
}

function saveLoginSettings(e) {
    e.preventDefault();
    const newUsername = $('newUsername').value.trim();
    const newPass = $('newPassword').value.trim();
    const confirmPass = $('confirmPassword').value.trim();

    if (!newUsername || !newPass) { showToast(t('toast.requiredFields'), 'error'); return; }
    if (newPass !== confirmPass) { showToast(t('toast.passwordMismatch'), 'error'); return; }
    if (newPass.length < 4) { showToast(t('toast.passwordShort'), 'error'); return; }

    const taken = state.data.config.users.some(u =>
        u.username === newUsername && u.id !== state.currentUser.id
    );
    if (taken) { showToast(t('toast.duplicateUsername'), 'error'); return; }

    const user = state.data.config.users.find(u => u.id === state.currentUser.id);
    if (user) {
        user.username = newUsername;
        user.password = newPass;
    }
    state.currentUser.username = newUsername;
    state.currentUser.displayName = newUsername;

    saveData();
    closeModalById('loginSettingsModal');
    showToast(t('toast.saved'), 'success');
    addActivity('تعديل بيانات الدخول', 'تم تحديث بيانات الدخول');
}

/* ============================================================
   11) BRANDING
   ============================================================ */
function applyBranding() {
    const info = state.data.config.clinicInfo;
    const br = state.data.config.branding;
    const root = document.documentElement;
    root.style.setProperty('--primary', br.primary || '#0D9488');
    root.style.setProperty('--secondary', br.secondary || '#6366F1');
    root.style.setProperty('--accent', br.accent || '#F59E0B');
    root.style.setProperty('--primary-dark', shadeColor(br.primary || '#0D9488', -15));
    root.style.setProperty('--primary-light', hexToRgba(br.primary || '#0D9488', 0.12));

    const brandName = currentLang === 'ar'
        ? (info.nameAr || info.nameEn || 'Clinic')
        : (info.nameEn || info.nameAr || 'Clinic');

    const logo = info.logo || '🦷';
    const logoIsImg = isImageLogo(logo);

    const setText = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    setText('brandNameTop', brandName);
    setText('brandNameSide', brandName);
    setText('loginTitle', brandName);

    const setLogo = (id) => {
        const el = $(id);
        if (!el) return;
        if (logoIsImg) {
            el.innerHTML = `<img src="${escapeHTML(logo)}" alt="logo" class="brand-logo-img" onerror="this.outerHTML='<span>🦷</span>'" />`;
        } else {
            el.textContent = logo;
        }
    };
    setLogo('brandLogoTop');
    setLogo('brandLogoSide');
    setLogo('loginLogo');
}

function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0,2), 16);
    const g = parseInt(h.substring(2,4), 16);
    const b = parseInt(h.substring(4,6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
}
function shadeColor(hex, percent) {
    const h = hex.replace('#','');
    let r = parseInt(h.substring(0,2), 16);
    let g = parseInt(h.substring(2,4), 16);
    let b = parseInt(h.substring(4,6), 16);
    const t = percent < 0 ? 0 : 255;
    const p = Math.abs(percent) / 100;
    r = Math.round((t - r) * p) + r;
    g = Math.round((t - g) * p) + g;
    b = Math.round((t - b) * p) + b;
    return '#' + [r,g,b].map(x => x.toString(16).padStart(2,'0')).join('');
}

function isImageLogo(value) {
    if (!value || typeof value !== 'string') return false;
    const v = value.trim();
    if (v.startsWith('data:image/')) return true;
    if (/^https?:\/\/.+\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(v)) return true;
    if (/^https?:\/\//i.test(v) && (v.includes('image') || v.includes('logo') || v.includes('cdn'))) return true;
    return false;
}

function renderLogoPreviewHTML(value) {
    if (isImageLogo(value)) {
        return `<img src="${escapeHTML(value)}" alt="Logo" class="brand-logo-preview"
                     onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'brand-logo-fallback',textContent:'🦷'}))" />`;
    }
    return `<span class="brand-logo-emoji">${escapeHTML(value || '🦷')}</span>`;
}

function handleLogoUpload(file) {
    if (!file) return;
    const allowed = ['image/png','image/jpeg','image/jpg','image/webp'];
    if (!allowed.includes(file.type)) {
        showToast(currentLang==='ar' ? '⚠️ صيغة غير مدعومة.' : '⚠️ Unsupported format.', 'error');
        return;
    }
    const MAX_SIZE = 500 * 1024;
    if (file.size > MAX_SIZE) {
        showToast(currentLang==='ar' ? `⚠️ الحد الأقصى 500 KB` : `⚠️ Max is 500 KB`, 'error');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(ev) {
        const img = new Image();
        img.onload = function() {
            const MAX_DIM = 128;
            let { width, height } = img;
            if (width > MAX_DIM || height > MAX_DIM) {
                const ratio = Math.min(MAX_DIM / width, MAX_DIM / height);
                width = Math.round(width * ratio);
                height = Math.round(height * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            const useJpeg = file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/webp';
            if (useJpeg) { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, width, height); }
            ctx.drawImage(img, 0, 0, width, height);
            const mime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
            let dataUrl = canvas.toDataURL(mime, mime === 'image/jpeg' ? 0.85 : undefined);
            const sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
            if (sizeKB > 300) dataUrl = canvas.toDataURL('image/jpeg', 0.7);

            state.data.config.clinicInfo.logo = dataUrl;
            saveData();
            applyBranding();
            const box = document.getElementById('logoPreviewBox');
            if (box) box.innerHTML = renderLogoPreviewHTML(dataUrl);
            const emojiInput = document.getElementById('cfg_logoEmoji');
            if (emojiInput) emojiInput.value = '';
            const urlInput = document.getElementById('cfg_logoUrl');
            if (urlInput) urlInput.value = '';
            showToast(currentLang==='ar' ? `✅ تم رفع الشعار` : `✅ Logo uploaded`, 'success');
        };
        img.onerror = () => showToast('❌ Failed to read image', 'error');
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
}

/* ============================================================
   12) SIDEBAR
   ============================================================ */
function renderSidebar() {
    const container = $('sidebarNavItems');
    if (!container) return;

    const deps = (state.data.config.departments || [])
        .filter(d => d.enabled !== false)
        .sort((a,b) => (a.order||0) - (b.order||0));

    let html = '';

    if (canView('dashboard')) {
        html += `<button class="nav-item" data-page="dashboard"><i class="fas fa-home"></i> ${t('nav.dashboard').replace(/^[^\s]+\s/,'')}</button>`;
    }

    deps.forEach(d => {
        if (!canView(d.builtIn ? d.pageId : 'departments')) return;
        const label = currentLang === 'ar' ? d.nameAr : (d.nameEn || d.nameAr);
        const icon = d.icon || 'fa-circle';
        const pageId = d.builtIn ? d.pageId : ('dept-' + d.id);
        html += `<button class="nav-item" data-page="${escapeHTML(pageId)}"><i class="fas ${escapeHTML(icon)}"></i> ${escapeHTML(label)}</button>`;
    });

    const staticPages = [
        { key: 'calendar', icon: 'fa-calendar' },
        { key: 'expenses', icon: 'fa-money-bill' },
        { key: 'reports', icon: 'fa-chart-bar' },
        { key: 'backup', icon: 'fa-database' },
        { key: 'settings', icon: 'fa-cog' }
    ];
    staticPages.forEach(sp => {
        if (!canView(sp.key)) return;
        html += `<button class="nav-item" data-page="${sp.key}"><i class="fas ${sp.icon}"></i> ${t('nav.'+sp.key).replace(/^[^\s]+\s/,'')}</button>`;
    });

    container.innerHTML = html;
    container.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.getAttribute('data-page')));
    });
}

function showPage(page) {
    const pf = $('patientFilePage');
    if (pf) { pf.style.display = 'none'; pf.classList.remove('active'); }

    $$('.page').forEach(p => p.classList.remove('active'));

    if (page.startsWith('dept-')) {
        const deptId = page.substring(5);
        const dept = state.data.config.departments.find(d => d.id === deptId);
        if (dept) {
            renderDynamicPage(deptId);
            const target = document.getElementById('page-dept-' + deptId);
            if (target) target.classList.add('active');
        }
    } else {
        const target = document.getElementById('page-' + page);
        if (target) target.classList.add('active');
        if (page === 'reports') showReportType('overview');
        if (page === 'settings') renderSettingsTab(state.settingsTab);
    }

    $$('.nav-item').forEach(n => n.classList.toggle('active', n.getAttribute('data-page') === page));

    if (window.innerWidth <= 768) $('sidebar')?.classList.remove('open');
}

function toggleSidebar() { $('sidebar')?.classList.toggle('open'); }

/* ============================================================
   13) THEME
   ============================================================ */
function toggleTheme() {
    document.body.classList.toggle('dark');
    try { localStorage.setItem(STORAGE_KEYS.theme, document.body.classList.contains('dark') ? 'dark' : 'light'); } catch(e){}
}

/* ============================================================
   14) ACTIVITIES / NOTIFICATIONS
   ============================================================ */
function addActivity(action, details = '') {
    state.data.activities.unshift({
        id: generateId(),
        action, details,
        time: new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
        user: state.currentUser?.username || 'system'
    });
    if (state.data.activities.length > 100) state.data.activities.length = 100;
    saveData();
    renderActivities();
}

function renderActivities() {
    const c = $('recentActivities');
    if (!c) return;
    if (!state.data.activities.length) {
        c.innerHTML = '<div class="item" style="justify-content:center;color:var(--text-light);">—</div>';
        return;
    }
    c.innerHTML = state.data.activities.slice(0, 8).map(a => `
        <div class="item">
            <span>${escapeHTML(a.action)}${a.details ? ' - ' + escapeHTML(a.details) : ''}</span>
            <span class="time">${escapeHTML(a.time)}</span>
        </div>
    `).join('');
}

function addNotification(title, message) {
    state.data.notifications.unshift({
        id: generateId(), title, message,
        time: new Date().toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US'),
        read: false
    });
    if (state.data.notifications.length > 50) state.data.notifications.length = 50;
    saveData();
    updateBadge();
}

function updateBadge() {
    const unread = state.data.notifications.filter(n => !n.read).length;
    const b = $('headerBadge'); if (b) b.textContent = unread;
}

function generateNotifications() {
    const seen = new Set(state.data.notifications.map(n => n.title + '|' + n.message));
    state.data.patients.forEach(p => {
        if (safeNumber(p.remaining) > 0) {
            const key = '⚠️ مدفوعات متأخرة|' + p.name;
            if (!seen.has(key)) addNotification('⚠️ مدفوعات متأخرة', `${p.name} - ${formatCurrency(p.remaining)}`);
        }
    });
    state.data.rentals.forEach(r => {
        if (safeNumber(r.remaining) > 0) {
            const key = '⚠️ متبقي في الإيجار|' + r.tenant;
            if (!seen.has(key)) addNotification('⚠️ متبقي في الإيجار', `${r.tenant} - ${formatCurrency(r.remaining)}`);
        }
    });
    updateBadge();
}

function showNotifications() {
    const list = $('notificationsList');
    if (!list) return;
    if (!state.data.notifications.length) {
        list.innerHTML = `<p style="text-align:center;padding:20px;color:var(--text-light);">${t('notifications.empty')}</p>`;
    } else {
        list.innerHTML = state.data.notifications.map(n => `
            <div style="padding:10px;border-bottom:1px solid var(--border);${!n.read ? 'background:var(--primary-light);' : ''}">
                <strong>${escapeHTML(n.title)}</strong>
                <span style="font-size:11px;color:var(--text-light);float:${currentLang==='ar'?'left':'right'};">${escapeHTML(n.time)}</span>
                <p style="font-size:13px;margin-top:4px;">${escapeHTML(n.message)}</p>
            </div>
        `).join('');
    }
    state.data.notifications.forEach(n => n.read = true);
    saveData();
    updateBadge();
    openModal('notificationsModal');
}

/* ============================================================
   15) STATS & CHARTS
   ============================================================ */
function renderStats() {
    const grid = $('statsGrid');
    if (!grid) return;

    const dentalCount = state.data.patients.length;
    const beautyCount = state.data.beauty.length;
    const today = todayStr();
    const todayRentals = state.data.rentals.filter(r => (r.startDate || r.date) === today);

    let totalRevenue = 0;
    state.data.patients.forEach(p => totalRevenue += safeNumber(p.paidAmount));
    state.data.beauty.forEach(b => totalRevenue += safeNumber(b.paidAmount));
    state.data.rentals.forEach(r => totalRevenue += safeNumber(r.paidAmount));
    Object.values(state.data.departmentsData || {}).forEach(dd => {
        (dd.items || []).forEach(it => totalRevenue += safeNumber(it.paidAmount));
    });

    let totalExpenses = 0;
    state.data.expenses.forEach(e => totalExpenses += safeNumber(e.amount));
    const netProfit = totalRevenue - totalExpenses;

    let totalRemaining = 0;
    state.data.patients.forEach(p => totalRemaining += safeNumber(p.remaining));
    state.data.beauty.forEach(b => totalRemaining += safeNumber(b.remaining));
    state.data.rentals.forEach(r => totalRemaining += safeNumber(r.remaining));
    Object.values(state.data.departmentsData || {}).forEach(dd => {
        (dd.items || []).forEach(it => totalRemaining += safeNumber(it.remaining));
    });

    const patientsWithRemaining = state.data.patients.filter(p => safeNumber(p.remaining) > 0).length;

    const cards = [
        { icon: 'fa-users', color: '#0D9488', label: currentLang==='ar'?'مرضى الأسنان':'Dental Patients', value: dentalCount },
        { icon: 'fa-user-friends', color: '#6366F1', label: currentLang==='ar'?'عملاء التجميل':'Beauty Clients', value: beautyCount },
        { icon: 'fa-calendar-check', color: '#F59E0B', label: currentLang==='ar'?'حجوزات اليوم':'Today\'s Bookings', value: todayRentals.length },
        { icon: 'fa-dollar-sign', color: '#22C55E', label: currentLang==='ar'?'إجمالي الإيرادات':'Total Revenue', value: formatCurrency(totalRevenue) },
        { icon: 'fa-money-bill', color: '#EF4444', label: currentLang==='ar'?'إجمالي المصروفات':'Total Expenses', value: formatCurrency(totalExpenses) },
        { icon: 'fa-chart-line', color: netProfit >= 0 ? '#22C55E' : '#EF4444', label: currentLang==='ar'?'صافي الربح':'Net Profit', value: formatCurrency(netProfit) },
        { icon: 'fa-clock', color: '#F59E0B', label: currentLang==='ar'?'المبالغ المتبقية':'Outstanding', value: formatCurrency(totalRemaining) },
        { icon: 'fa-hospital-user', color: '#8B5CF6', label: currentLang==='ar'?'مرضى بمتبقي':'Patients with Balance', value: patientsWithRemaining }
    ];

    grid.innerHTML = cards.map(c => `
        <div class="stat-card">
            <div class="stat-icon" style="background:${c.color}"><i class="fas ${c.icon}"></i></div>
            <div class="stat-info">
                <h3>${escapeHTML(c.label)}</h3>
                <p class="stat-number">${c.value}</p>
            </div>
        </div>
    `).join('');
}

function updateCharts() {
    if (typeof Chart === 'undefined') return;
    const ctx1 = $('revenueChart')?.getContext('2d');
    const ctx2 = $('expenseChart')?.getContext('2d');
    if (!ctx1 || !ctx2) return;

    const monthsAr = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const months = currentLang === 'ar' ? monthsAr : monthsEn;
    const currentYear = new Date().getFullYear();
    const monthlyRevenue = Array(12).fill(0);
    const monthlyExpenses = Array(12).fill(0);

    const addPayments = (arr) => arr.forEach(item => {
        (item.payments || []).forEach(p => {
            if (!p.date) return;
            const d = new Date(p.date);
            if (d.getFullYear() === currentYear) monthlyRevenue[d.getMonth()] += safeNumber(p.amount);
        });
    });
    addPayments(state.data.patients);
    addPayments(state.data.beauty);
    Object.values(state.data.departmentsData || {}).forEach(dd => addPayments(dd.items || []));

    state.data.rentals.forEach(r => {
        const refDate = r.startDate || r.date;
        if (!refDate) return;
        const d = new Date(refDate);
        if (d.getFullYear() === currentYear) monthlyRevenue[d.getMonth()] += safeNumber(r.paidAmount);
    });
    state.data.expenses.forEach(e => {
        if (!e.date) return;
        const d = new Date(e.date);
        if (d.getFullYear() === currentYear) monthlyExpenses[d.getMonth()] += safeNumber(e.amount);
    });

    const labels = [], rev = [], exp = [];
    for (let i = 0; i < 12; i++) {
        if (monthlyRevenue[i] > 0 || monthlyExpenses[i] > 0) {
            labels.push(months[i]); rev.push(monthlyRevenue[i]); exp.push(monthlyExpenses[i]);
        }
    }
    if (!labels.length) {
        const now = new Date();
        for (let i = 2; i >= 0; i--) {
            const idx = (now.getMonth() - i + 12) % 12;
            labels.push(months[idx]); rev.push(0); exp.push(0);
        }
    }

    if (state.charts.revenue) state.charts.revenue.destroy();
    if (state.charts.expense) state.charts.expense.destroy();

    state.charts.revenue = new Chart(ctx1, {
        type: 'bar',
        data: { labels, datasets: [{ label: '', data: rev, backgroundColor: 'rgba(13,148,136,0.7)', borderColor: '#0D9488', borderWidth: 2, borderRadius: 4 }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
    state.charts.expense = new Chart(ctx2, {
        type: 'line',
        data: { labels, datasets: [{ label: '', data: exp, backgroundColor: 'rgba(239,68,68,0.1)', borderColor: '#EF4444', borderWidth: 2, fill: true, tension: 0.3 }] },
        options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    });
}

function refreshCharts() {
    updateCharts();
    showToast('🔄 ' + (currentLang==='ar'?'تم تحديث الرسوم البيانية':'Charts refreshed'), 'info');
}

/* ============================================================
   16) RENDER TABLES
   ============================================================ */
function getFirstVisit(visits) {
    if (!visits || !visits.length) return '-';
    return [...visits].sort((a,b) => new Date(a.date) - new Date(b.date))[0].date || '-';
}
function getLastVisit(visits) {
    if (!visits || !visits.length) return '-';
    return [...visits].sort((a,b) => new Date(b.date) - new Date(a.date))[0].date || '-';
}
function updateFirstVisit(p) {
    if (!p.visits || !p.visits.length) { p.firstVisit = '-'; return; }
    p.firstVisit = getFirstVisit(p.visits);
}

function renderPatients() {
    const tbody = $('patientsTableBody');
    if (!tbody) return;
    if (!state.data.patients.length) {
        tbody.innerHTML = `<tr><td colspan="11" style="text-align:center;padding:30px;color:var(--text-light);">${t('common.none')}</td></tr>`;
        return;
    }
    tbody.innerHTML = state.data.patients.map((p, i) => {
        if (!p.firstVisit) updateFirstVisit(p);
        const firstVisit = p.firstVisit || getFirstVisit(p.visits);
        const lastVisit = getLastVisit(p.visits);
        const canE = canEdit('dental');
        const canD = canDelete('dental');
        return `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${escapeHTML(p.name)}</strong></td>
                <td>${escapeHTML(p.phone)}</td>
                <td>${safeNumber(p.age)}</td>
                <td style="font-size:11px;max-width:120px;">${(p.procedures||[]).map(escapeHTML).join(', ') || '-'}</td>
                <td style="font-size:12px;color:var(--primary);font-weight:600;">${escapeHTML(firstVisit)}</td>
                <td style="font-size:12px;">${escapeHTML(lastVisit)}</td>
                <td>${formatCurrency(p.totalAmount)}</td>
                <td>${formatCurrency(p.paidAmount)}</td>
                <td style="color:${safeNumber(p.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(p.remaining)}</td>
                <td>
                    <button class="btn-view" data-action="open-patient" data-id="${escapeHTML(p.id)}" title="Open">📂</button>
                    ${canE ? `<button class="btn-edit" data-action="edit-patient" data-id="${escapeHTML(p.id)}" title="Edit">✏️</button>` : ''}
                    ${canD ? `<button class="btn-delete" data-action="delete-patient" data-id="${escapeHTML(p.id)}" title="Delete">🗑️</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
    bindPatientActions();
}

function bindPatientActions() {
    const tb = $('patientsTableBody');
    if (!tb) return;
    tb.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            if (action === 'open-patient') openPatientFile(id);
            else if (action === 'edit-patient') editPatient(id);
            else if (action === 'delete-patient') deletePatient(id);
        });
    });
}

function getLastBeautyVisit(visits) {
    if (!visits || !visits.length) return '-';
    return [...visits].sort((a,b) => new Date(b.date) - new Date(a.date))[0].date || '-';
}

function renderBeauty() {
    const tbody = $('beautyTableBody');
    if (!tbody) return;
    if (!state.data.beauty.length) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center;padding:30px;color:var(--text-light);">${t('common.none')}</td></tr>`;
        return;
    }
    tbody.innerHTML = state.data.beauty.map((b, i) => {
        const lastVisit = getLastBeautyVisit(b.visits);
        const progress = Math.min(100, Math.max(0, safeNumber(b.progress)));
        const canE = canEdit('beauty');
        const canD = canDelete('beauty');
        return `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${escapeHTML(b.name)}</strong></td>
                <td>${escapeHTML(b.phone)}</td>
                <td>${escapeHTML(b.service || '-')}</td>
                <td>
                    <div style="display:flex;align-items:center;gap:6px;min-width:100px;">
                        <div style="flex:1;height:6px;background:var(--bg);border-radius:3px;">
                            <div style="width:${progress}%;height:100%;background:var(--primary);border-radius:3px;"></div>
                        </div>
                        <span style="font-size:11px;">${progress}%</span>
                    </div>
                </td>
                <td style="font-size:12px;">${escapeHTML(lastVisit)}</td>
                <td>${formatCurrency(b.totalAmount)}</td>
                <td>${formatCurrency(b.paidAmount)}</td>
                <td style="color:${safeNumber(b.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(b.remaining)}</td>
                <td>
                    <button class="btn-view" data-action="open-beauty" data-id="${escapeHTML(b.id)}">📂</button>
                    ${canE ? `<button class="btn-edit" data-action="edit-beauty" data-id="${escapeHTML(b.id)}">✏️</button>` : ''}
                    ${canD ? `<button class="btn-delete" data-action="delete-beauty" data-id="${escapeHTML(b.id)}">🗑️</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
    const tb = $('beautyTableBody');
    tb.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            if (action === 'open-beauty') openBeautyFile(id);
            else if (action === 'edit-beauty') editItem('beauty', id);
            else if (action === 'delete-beauty') deleteItem('beauty', id);
        });
    });
}

function renderRentals() {
    const tbody = $('rentalTableBody');
    if (!tbody) return;
    if (!state.data.rentals.length) {
        tbody.innerHTML = `<tr><td colspan="12" style="text-align:center;padding:30px;color:var(--text-light);">${t('common.none')}</td></tr>`;
        return;
    }
    tbody.innerHTML = state.data.rentals.map((r, i) => {
        const materialsText = (r.materials || []).map(m => m.name).join(', ') || '-';
        const canE = canEdit('rental');
        const canD = canDelete('rental');
        const fromStr = `${escapeHTML(r.startDate || r.date || '')} ${escapeHTML(r.startTime || '')}`;
        const toStr   = `${escapeHTML(r.endDate   || r.date || '')} ${escapeHTML(r.endTime   || '')}`;
        return `
            <tr>
                <td>${i + 1}</td>
                <td><strong>${escapeHTML(r.clinic)}</strong></td>
                <td>${escapeHTML(r.tenant)}</td>
                <td style="font-size:12px;">${fromStr}</td>
                <td style="font-size:12px;">${toStr}</td>
                <td>${safeNumber(r.hours).toFixed(1)}</td>
                <td style="font-size:11px;">${escapeHTML(materialsText)}</td>
                <td style="font-weight:700;color:var(--primary);">${formatCurrency(r.totalPrice)}</td>
                <td>${formatCurrency(r.paidAmount)}</td>
                <td style="color:${safeNumber(r.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(r.remaining)}</td>
                <td><span style="color:${r.status === 'مدفوع' || r.status === 'Paid' ? 'var(--success)' : 'var(--warning)'}">${escapeHTML(r.status)}</span></td>
                <td>
                    ${canE ? `<button class="btn-edit" data-action="edit-rental" data-id="${escapeHTML(r.id)}">✏️</button>` : ''}
                    ${canD ? `<button class="btn-delete" data-action="delete-rental" data-id="${escapeHTML(r.id)}">🗑️</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
    const tb = $('rentalTableBody');
    tb.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            if (action === 'edit-rental') editItem('rental', id);
            else if (action === 'delete-rental') deleteItem('rental', id);
        });
    });
}

function renderExpenses() {
    const tbody = $('expensesTableBody');
    if (!tbody) return;
    if (!state.data.expenses.length) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-light);">${t('common.none')}</td></tr>`;
        return;
    }
    tbody.innerHTML = state.data.expenses.map((e, i) => {
        const canE = canEdit('expenses');
        const canD = canDelete('expenses');
        return `
            <tr>
                <td>${i + 1}</td>
                <td>${escapeHTML(e.category)}</td>
                <td>${formatCurrency(e.amount)}</td>
                <td>${escapeHTML(e.date)}</td>
                <td>${escapeHTML(e.description || '')}</td>
                <td>
                    ${canE ? `<button class="btn-edit" data-action="edit-expense" data-id="${escapeHTML(e.id)}">✏️</button>` : ''}
                    ${canD ? `<button class="btn-delete" data-action="delete-expense" data-id="${escapeHTML(e.id)}">🗑️</button>` : ''}
                </td>
            </tr>
        `;
    }).join('');
    const tb = $('expensesTableBody');
    tb.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            if (action === 'edit-expense') editItem('expense', id);
            else if (action === 'delete-expense') deleteItem('expense', id);
        });
    });
}

function renderAll() {
    renderStats();
    renderPatients();
    renderBeauty();
    renderRentals();
    renderExpenses();
    renderCalendar();
    updateCharts();
    renderActivities();
    updateBadge();
    renderDynamicPages();
    applyPermissionVisibility();
}

function applyPermissionVisibility() {
    const addPatientBtn = $('addPatientBtn');
    if (addPatientBtn) addPatientBtn.style.display = canCreate('dental') ? '' : 'none';

    const addBeautyBtn = $('addBeautyBtn');
    if (addBeautyBtn) addBeautyBtn.style.display = canCreate('beauty') ? '' : 'none';

    const addRentalBtn = $('addRentalBtn');
    if (addRentalBtn) addRentalBtn.style.display = canCreate('rental') ? '' : 'none';

    const addExpenseBtn = $('addExpenseBtn');
    if (addExpenseBtn) addExpenseBtn.style.display = canCreate('expenses') ? '' : 'none';
}

/* ============================================================
   17) CALENDAR
   ============================================================ */
function renderCalendar() {
    const grid = $('calendarGrid');
    if (!grid) return;

    const monthsAr = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const months = currentLang === 'ar' ? monthsAr : monthsEn;

    const year = state.currentMonth.getFullYear();
    const month = state.currentMonth.getMonth();
    const cm = $('currentMonth');
    if (cm) cm.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();

    const dayNamesAr = ['أحد','إثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];
    const dayNamesEn = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dayNames = currentLang === 'ar' ? dayNamesAr : dayNamesEn;

    let html = '';
    dayNames.forEach(d => html += `<div class="day-name">${d}</div>`);
    for (let i = firstDay; i > 0; i--) html += `<div class="day other-month">${daysInPrev - i + 1}</div>`;

    const today = todayStr();
    for (let i = 1; i <= daysInMonth; i++) {
        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
        const hasEvent = state.data.rentals.some(r => {
            const start = r.startDate || r.date;
            const end = r.endDate || r.date;
            return dateStr >= start && dateStr <= end;
        });
        let cls = 'day';
        if (hasEvent) cls += ' has-event';
        if (dateStr === today) cls += ' today';
        html += `<div class="${cls}" data-date="${dateStr}">${i}</div>`;
    }
    const totalCells = firstDay + daysInMonth;
    const remaining = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= remaining; i++) html += `<div class="day other-month">${i}</div>`;

    grid.innerHTML = html;
    grid.querySelectorAll('.day[data-date]').forEach(el => {
        el.addEventListener('click', () => showDayDetails(el.getAttribute('data-date')));
    });

    const eventsDiv = $('calendarEvents');
    if (eventsDiv) {
        const todayRentals = state.data.rentals.filter(r => {
            const start = r.startDate || r.date;
            const end = r.endDate || r.date;
            return today >= start && today <= end;
        });
        if (todayRentals.length) {
            eventsDiv.innerHTML = `<strong>${t('calendar.todayEvents')}:</strong> ` +
                todayRentals.map(r => `${escapeHTML(r.clinic)} - ${escapeHTML(r.tenant)}`).join(' | ');
        } else {
            eventsDiv.innerHTML = t('calendar.noEvents');
        }
    }
}

function changeMonth(delta) {
    state.currentMonth.setMonth(state.currentMonth.getMonth() + delta);
    renderCalendar();
}
function goToToday() { state.currentMonth = new Date(); renderCalendar(); }

function showDayDetails(date) {
    const events = state.data.rentals.filter(r => {
        const start = r.startDate || r.date;
        const end = r.endDate || r.date;
        return date >= start && date <= end;
    });
    if (!events.length) { showToast(t('calendar.noEvents'), 'info'); return; }
    const content = `
        <div class="modal-header">
            <h3>📅 ${escapeHTML(date)}</h3>
            <button class="close-btn" data-close-modal="dayDetailsModal">✕</button>
        </div>
        ${events.map(e => `
            <div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:13px;">
                <strong>${escapeHTML(e.clinic)}</strong> - ${escapeHTML(e.tenant)}
                <span style="color:var(--text-light);">(${escapeHTML(e.startDate||'')} ${escapeHTML(e.startTime)} → ${escapeHTML(e.endDate||'')} ${escapeHTML(e.endTime)})</span>
                <span style="float:${currentLang==='ar'?'left':'right'};font-weight:700;color:var(--primary);">${formatCurrency(e.totalPrice)}</span>
            </div>
        `).join('')}
    `;
    let modal = document.getElementById('dayDetailsModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'dayDetailsModal';
        modal.innerHTML = `<div class="modal-box">${content}</div>`;
        document.body.appendChild(modal);
    } else {
        modal.querySelector('.modal-box').innerHTML = content;
    }
    openModal('dayDetailsModal');
}

/* ============================================================
   18) PATIENT — FORM / SAVE
   ============================================================ */
function openPatientForm(patientData = null) {
    if (!canCreate('dental') && !patientData) {
        showToast(t('toast.noPermission'), 'error'); return;
    }
    state.editingPatientId = patientData?.id || null;
    state.currentDynamicDept = null;
    const isEdit = !!state.editingPatientId;
    const titleEl = $('patientFormTitle');
    if (titleEl) titleEl.textContent = isEdit
        ? (currentLang==='ar'?'تعديل مريض':'Edit Patient')
        : (currentLang==='ar'?'إضافة مريض جديد':'Add New Patient');

    const today = todayStr();
    const p = patientData || {};
    const proceduresText = (p.procedures || []).join(', ');

    const fields = $('patientFormFields');
    if (!fields) return;
    fields.innerHTML = `
        <div class="form-group"><label>${currentLang==='ar'?'الاسم الكامل':'Full Name'} <span class="required">*</span></label><input type="text" id="p_name" value="${escapeHTML(p.name||'')}" required /></div>
        <div class="form-group"><label>${currentLang==='ar'?'رقم الهاتف':'Phone'} <span class="required">*</span></label><input type="text" id="p_phone" value="${escapeHTML(p.phone||'')}" required /></div>
        <div class="form-row-2">
            <div class="form-group"><label>${currentLang==='ar'?'العمر':'Age'}</label><input type="number" id="p_age" value="${safeNumber(p.age)||''}" min="0" max="150" oninput="updateAgeFromYears()" /></div>
            <div class="form-group"><label>${currentLang==='ar'?'تاريخ الميلاد':'Birth Date'}</label><input type="date" id="p_birthDate" value="${escapeHTML(p.birthDate||'')}" max="${today}" onchange="updateAgeFromBirth()" /></div>
        </div>
        <div class="form-group"><label>${currentLang==='ar'?'الجنس':'Gender'}</label>
            <select id="p_gender">
                <option value="ذكر" ${p.gender==='ذكر'?'selected':''}>${currentLang==='ar'?'ذكر':'Male'}</option>
                <option value="أنثى" ${p.gender==='أنثى'?'selected':''}>${currentLang==='ar'?'أنثى':'Female'}</option>
            </select>
        </div>
        <div class="form-group"><label>${currentLang==='ar'?'الإجراءات (مفصولة بفواصل)':'Procedures (comma-separated)'}</label>
            <input type="text" id="p_procedures" value="${escapeHTML(proceduresText)}" />
        </div>
        <div class="form-group"><label>${currentLang==='ar'?'تاريخ أول زيارة':'First Visit Date'}</label>
            <input type="date" id="p_visitDate" value="${escapeHTML(p.visits?.[0]?.date || today)}" max="${today}" />
        </div>
        <div class="form-row-2">
            <div class="form-group"><label>${currentLang==='ar'?'المبلغ الكلي':'Total Amount'}</label><input type="number" id="p_total" value="${safeNumber(p.totalAmount)}" min="0" step="0.01" oninput="updateRemaining()" /></div>
            <div class="form-group"><label>${currentLang==='ar'?'المدفوع':'Paid'}</label><input type="number" id="p_paid" value="${safeNumber(p.paidAmount)}" min="0" step="0.01" oninput="updateRemaining()" /></div>
        </div>
        <div class="form-group"><label>${currentLang==='ar'?'المتبقي':'Remaining'}</label><input type="number" id="p_remaining" value="${safeNumber(p.remaining)}" readonly /></div>
        <div class="form-group"><label>${currentLang==='ar'?'ملاحظات':'Notes'}</label><input type="text" id="p_notes" value="${escapeHTML(p.notes||'')}" /></div>
    `;
    openModal('patientFormModal');
}

function updateRemaining() {
    const total = safeNumber($('p_total')?.value);
    const paid = safeNumber($('p_paid')?.value);
    if ($('p_remaining')) $('p_remaining').value = Math.max(0, total - paid);
}

function isDuplicate(type, phone, excludeId = null) {
    let arr = [];
    if (type === 'patient') arr = state.data.patients;
    else if (type === 'beauty') arr = state.data.beauty;
    else if (type === 'rental') arr = state.data.rentals;
    return arr.some(x => x.phone === phone && x.id !== excludeId);
}

/* ⭐ savePatient — النسخة الأصلية للعيادة (بدون dispatch) */
function savePatient(e) {
    e.preventDefault();
    const getVal = id => $(id)?.value || '';
    const phone = getVal('p_phone').trim();
    if (!phone) { showToast('⚠️ Phone required', 'error'); return; }
    if (isDuplicate('patient', phone, state.editingPatientId)) {
        showToast(t('toast.duplicate'), 'error'); return;
    }

    const ageInput = $('p_age')?.value;
    const birthDate = $('p_birthDate')?.value;
    let finalAge = parseInt(ageInput) || 0;
    if (birthDate && !ageInput) finalAge = calculateAgeFromBirth(birthDate);

    const procedures = getVal('p_procedures').split(',').map(s => s.trim()).filter(Boolean);
    const visitDate = getVal('p_visitDate') || todayStr();
    const total = safeNumber(getVal('p_total'));
    const paid = safeNumber(getVal('p_paid'));
    const remaining = Math.max(0, total - paid);

    const existing = state.editingPatientId
        ? state.data.patients.find(x => x.id === state.editingPatientId)
        : null;

    const item = {
        id: existing?.id || generateId(),
        name: getVal('p_name').trim(),
        phone,
        age: finalAge,
        birthDate: birthDate || '',
        gender: getVal('p_gender'),
        totalAmount: total,
        paidAmount: paid,
        remaining,
        notes: getVal('p_notes'),
        procedures,
        visits: existing?.visits ? [...existing.visits] : [],
        payments: existing?.payments ? [...existing.payments] : []
    };

    if (!existing) {
        if (visitDate) {
            item.visits.push({
                date: visitDate,
                procedure: procedures[0] || 'زيارة أولى',
                procedurePrice: total,
                payment: paid,
                notes: getVal('p_notes') || ''
            });
        }
        if (paid > 0) {
            item.payments.push({ date: visitDate, amount: paid, method: 'كاش' });
        }
    }
    updateFirstVisit(item);

    if (existing) {
        const idx = state.data.patients.findIndex(x => x.id === existing.id);
        state.data.patients[idx] = item;
    } else {
        state.data.patients.push(item);
    }

    saveData();
    renderAll();
    closeModalById('patientFormModal');
    showToast(t('toast.saved'), 'success');
    addActivity(existing ? 'تعديل مريض' : 'إضافة مريض', item.name);
    state.editingPatientId = null;
    state.currentDynamicDept = null;
}

function editPatient(id) {
    if (!canEdit('dental')) { showToast(t('toast.noPermission'), 'error'); return; }
    const p = state.data.patients.find(x => x.id === id);
    if (p) openPatientForm(p);
}

function deletePatient(id) {
    if (!canDelete('dental')) { showToast(t('toast.noPermission'), 'error'); return; }
    const p = state.data.patients.find(x => x.id === id);
    if (!p) return;
    showConfirmDialog(
        (currentLang==='ar'?`حذف المريض "${p.name}"؟`:`Delete patient "${p.name}"?`),
        () => {
            state.data.patients = state.data.patients.filter(x => x.id !== id);
            saveData(); renderAll();
            showToast(t('toast.deleted'), 'warning');
            addActivity('حذف مريض', p.name);
        }
    );
}

/* ============================================================
   19) CONFIRM DIALOG
   ============================================================ */
function showConfirmDialog(message, onConfirm) {
    const msgEl = $('deleteConfirmMessage');
    if (msgEl) msgEl.textContent = message;
    const btn = $('deleteConfirmBtn');
    if (btn) {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        newBtn.addEventListener('click', () => {
            closeModalById('deleteConfirmModal');
            onConfirm();
        });
    }
    openModal('deleteConfirmModal');
}

/* ============================================================
   20) PATIENT FILE
   ============================================================ */
function openPatientFile(id) {
    const p = state.data.patients.find(x => x.id === id);
    if (!p) { showToast('Not found', 'error'); return; }
    state.currentPatientId = id;
    state.currentDynamicDept = null;

    const pf = $('patientFilePage');
    if (pf) {
        pf.style.display = 'block';
        pf.classList.add('active');
    }
    $$('.page').forEach(pg => pg.classList.remove('active'));

    const title = $('patientFileTitle');
    if (title) title.textContent = `📋 ${p.name}`;

    renderPatientFile(p);
}

function renderPatientFile(p) {
    const container = $('patientFileContent');
    if (!container) return;

    const firstVisit = p.firstVisit || getFirstVisit(p.visits);
    const lastVisit = getLastVisit(p.visits);
    const canCreate2 = canCreate('dental');
    const canDelete2 = canDelete('dental');

    container.innerHTML = `
        <div class="patient-file-info">
            <div class="field"><label>${currentLang==='ar'?'الاسم':'Name'}</label><div class="value">${escapeHTML(p.name)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الهاتف':'Phone'}</label><div class="value">${escapeHTML(p.phone)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'العمر':'Age'}</label><div class="value">${safeNumber(p.age)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'تاريخ الميلاد':'Birth Date'}</label><div class="value">${escapeHTML(p.birthDate||'-')}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الجنس':'Gender'}</label><div class="value">${escapeHTML(p.gender||'-')}</div></div>
            <div class="field"><label>${currentLang==='ar'?'أول زيارة':'First Visit'}</label><div class="value">${escapeHTML(firstVisit)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'آخر زيارة':'Last Visit'}</label><div class="value">${escapeHTML(lastVisit)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'المتبقي':'Remaining'}</label><div class="value" style="color:${safeNumber(p.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(p.remaining)}</div></div>
        </div>

        <div class="patient-file-section">
            <div class="section-header">
                <h4>${currentLang==='ar'?'🦷 الإجراءات':'🦷 Procedures'}</h4>
                ${(p.procedures||[]).length && canDelete2 ? `<button class="btn-danger btn-xs" data-del="procedure-all">🗑️ ${t('common.remove')}</button>` : ''}
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
                ${(p.procedures||[]).length ? p.procedures.map((proc, idx) => `
                    <span class="procedure-chip">
                        ${escapeHTML(proc)}
                        ${canDelete2 ? `<button data-del="procedure" data-idx="${idx}">✕</button>` : ''}
                    </span>
                `).join('') : `<span style="color:var(--text-light);">${t('common.none')}</span>`}
            </div>
        </div>

        <div class="patient-file-section">
            <div class="section-header">
                <h4>${currentLang==='ar'?'💰 المالية':'💰 Financial'}</h4>
                ${(p.payments||[]).length && canDelete2 ? `<button class="btn-danger btn-xs" data-del="payment-all">🗑️ ${t('common.remove')}</button>` : ''}
            </div>
            <div class="info-grid">
                <div class="info-item"><span class="label">${t('table.total')}</span><span class="val">${formatCurrency(p.totalAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.paid')}</span><span class="val" style="color:var(--success)">${formatCurrency(p.paidAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.remaining')}</span><span class="val" style="color:${safeNumber(p.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(p.remaining)}</span></div>
            </div>
            ${(p.payments||[]).length ? `
                <div style="margin-top:8px;font-size:13px;">
                    ${p.payments.map((pay, idx) => `
                        <div style="padding:4px 0;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;gap:8px;">
                            <span>📅 ${escapeHTML(pay.date)} - ${formatCurrency(pay.amount)} (${escapeHTML(pay.method)})</span>
                            ${canDelete2 ? `<button class="close-btn" style="font-size:14px;" data-del="payment" data-idx="${idx}">✕</button>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>

        <div class="patient-file-section">
            <div class="section-header">
                <h4>${currentLang==='ar'?'📅 الزيارات':'📅 Visits'}</h4>
                ${(p.visits||[]).length && canDelete2 ? `<button class="btn-danger btn-xs" data-del="visit-all">🗑️ ${t('common.remove')}</button>` : ''}
            </div>
            ${(p.visits||[]).length ? p.visits.map((v, idx) => {
                const priceTxt = safeNumber(v.procedurePrice) > 0 ? `+${formatCurrency(v.procedurePrice)}` : '';
                const payTxt = safeNumber(v.payment) > 0 ? `+${formatCurrency(v.payment)}` : '';
                return `
                    <div class="visit-item">
                        <div class="visit-info">
                            <span>📅 ${escapeHTML(v.date)}</span>
                            <span>🦷 ${escapeHTML(v.procedure || '')}</span>
                            ${v.notes ? `<span style="color:var(--text-light);font-size:12px;">- ${escapeHTML(v.notes)}</span>` : ''}
                        </div>
                        <div style="display:flex;align-items:center;gap:10px;">
                            ${priceTxt ? `<span class="visit-amount price" title="${currentLang==='ar'?'سعر الإجراء':'Procedure price'}">${priceTxt}</span>` : ''}
                            ${payTxt ? `<span class="visit-amount payment" title="${currentLang==='ar'?'دفعة':'Payment'}">${payTxt}</span>` : ''}
                            ${canDelete2 ? `<button class="close-btn" style="font-size:14px;" data-del="visit" data-idx="${idx}">✕</button>` : ''}
                        </div>
                    </div>
                `;
            }).join('') : `<div style="color:var(--text-light);">${t('common.none')}</div>`}
        </div>

        <div class="patient-file-actions">
            ${canCreate2 ? `<button class="btn-primary" id="patientAddVisitBtn">➕ ${t('visit.add')}</button>` : ''}
            ${canCreate2 ? `<button class="btn-primary" id="patientAddPaymentBtn">💰 ${t('payment.add')}</button>` : ''}
            <button class="btn-secondary" id="patientBackBtn">← ${t('common.back')}</button>
        </div>
    `;

    $('patientAddVisitBtn')?.addEventListener('click', openVisitModal);
    $('patientAddPaymentBtn')?.addEventListener('click', openPaymentModal);
    $('patientBackBtn')?.addEventListener('click', goBackToPatients);

    container.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', () => {
            const kind = btn.getAttribute('data-del');
            const idxAttr = btn.getAttribute('data-idx');
            const idx = idxAttr === null ? 'all' : parseInt(idxAttr);
            showDeleteConfirm(kind, idx);
        });
    });
}

function goBackToPatients() {
    const pf = $('patientFilePage');
    if (pf) { pf.style.display = 'none'; pf.classList.remove('active'); }
    showPage('dental');
}

/* ============================================================
   21) VISIT MODAL
   ============================================================ */
function openVisitModal() {
    const today = todayStr();
    state.selectedServicesList = [];

    if ($('visitDate')) $('visitDate').value = today;
    if ($('visitProcedure')) $('visitProcedure').value = '';
    if ($('visitNotes')) $('visitNotes').value = '';
    if ($('visitProcedurePrice')) $('visitProcedurePrice').value = '0';
    if ($('visitPayment')) $('visitPayment').value = '0';

    populateVisitServiceDropdown('dental');
    renderSelectedServicesChips();

    openModal('visitModal');
}

function populateVisitServiceDropdown(deptId) {
    const select = $('visitServiceSelect');
    if (!select) return;

    const services = (state.data.config.services || [])
        .filter(s => s.enabled !== false)
        .filter(s => !deptId || !s.department || s.department === deptId)
        .sort((a,b) => (a.order||0) - (b.order||0));

    const options = [`<option value="">${t('visit.selectService')}</option>`];
    services.forEach(s => {
        const label = currentLang==='ar' ? s.nameAr : (s.nameEn || s.nameAr);
        options.push(`<option value="${escapeHTML(s.id)}" data-price="${safeNumber(s.price)}">${escapeHTML(label)} — ${formatCurrency(s.price)}</option>`);
    });
    select.innerHTML = options.join('');
}

function addServiceFromDropdown() {
    const select = $('visitServiceSelect');
    if (!select) return;
    const svcId = select.value;
    if (!svcId) {
        showToast(t('toast.selectService'), 'warning');
        return;
    }
    const svc = (state.data.config.services || []).find(s => s.id === svcId);
    if (!svc) return;
    if (state.selectedServicesList.some(x => x.id === svcId)) {
        showToast(t('toast.serviceDuplicate'), 'warning');
        return;
    }
    const label = currentLang==='ar' ? svc.nameAr : (svc.nameEn || svc.nameAr);
    state.selectedServicesList.push({
        id: svc.id,
        name: label,
        price: safeNumber(svc.price)
    });
    select.value = '';
    renderSelectedServicesChips();
    updateVisitProcedurePriceFromServices();
}

function renderSelectedServicesChips() {
    const c = $('selectedServicesChips');
    if (!c) return;
    if (!state.selectedServicesList.length) {
        c.innerHTML = `<span class="muted-sm">${currentLang==='ar'?'لم تختر خدمات بعد':'No services selected yet'}</span>`;
    } else {
        c.innerHTML = state.selectedServicesList.map((s, idx) => `
            <span class="service-chip">
                ${escapeHTML(s.name)} — ${formatCurrency(s.price)}
                <button type="button" data-svc-idx="${idx}">✕</button>
            </span>
        `).join('');
        c.querySelectorAll('[data-svc-idx]').forEach(b => {
            b.addEventListener('click', () => {
                const i = parseInt(b.getAttribute('data-svc-idx'));
                state.selectedServicesList.splice(i, 1);
                renderSelectedServicesChips();
                updateVisitProcedurePriceFromServices();
            });
        });
    }
}

function updateVisitProcedurePriceFromServices() {
    if (!state.selectedServicesList.length) return;
    const sum = state.selectedServicesList.reduce((a,b) => a + safeNumber(b.price), 0);
    if ($('visitProcedurePrice')) $('visitProcedurePrice').value = sum;
    if ($('visitProcedure') && !$('visitProcedure').value.trim()) {
        $('visitProcedure').value = state.selectedServicesList.map(s => s.name).join(', ');
    }
}

function saveVisit(e) {
    e.preventDefault();
    const p = state.data.patients.find(x => x.id === state.currentPatientId);
    if (!p) return;

    const date = $('visitDate').value;
    const procedureText = $('visitProcedure').value.trim();
    const serviceNames = state.selectedServicesList.map(s => s.name).join(', ');
    const finalProcedure = procedureText || serviceNames;
    const procedurePrice = safeNumber($('visitProcedurePrice').value);
    const payment = safeNumber($('visitPayment').value);
    const notes = $('visitNotes').value.trim();

    if (!date || !finalProcedure) { showToast(t('toast.requiredFields'), 'error'); return; }

    if (!Array.isArray(p.visits)) p.visits = [];
    if (!Array.isArray(p.payments)) p.payments = [];
    if (!Array.isArray(p.procedures)) p.procedures = [];

    p.visits.push({
        date, procedure: finalProcedure,
        procedurePrice, payment, notes
    });

    state.selectedServicesList.forEach(s => {
        if (!p.procedures.includes(s.name)) p.procedures.push(s.name);
    });
    if (procedureText && !state.selectedServicesList.length && !p.procedures.includes(procedureText)) {
        p.procedures.push(procedureText);
    }

    p.totalAmount = safeNumber(p.totalAmount) + procedurePrice;
    p.paidAmount = safeNumber(p.paidAmount) + payment;
    p.remaining = Math.max(0, p.totalAmount - p.paidAmount);

    if (payment > 0) {
        p.payments.push({ date, amount: payment, method: 'كاش' });
    }

    updateFirstVisit(p);

    saveData();
    renderAll();
    closeModalById('visitModal');
    state.selectedServicesList = [];
    if (state.currentPatientId) openPatientFile(state.currentPatientId);
    showToast(t('toast.saved'), 'success');
}

/* ============================================================
   22) PAYMENT MODAL
   ============================================================ */
function openPaymentModal() {
    if ($('paymentDate')) $('paymentDate').value = todayStr();
    if ($('paymentAmount')) $('paymentAmount').value = '';
    if ($('paymentMethod')) $('paymentMethod').value = 'كاش';
    openModal('paymentModal');
}

function savePayment(e) {
    e.preventDefault();
    const p = state.data.patients.find(x => x.id === state.currentPatientId);
    if (!p) return;
    const date = $('paymentDate').value;
    const amount = safeNumber($('paymentAmount').value);
    const method = $('paymentMethod').value;
    if (!date || amount <= 0) { showToast('⚠️ Invalid', 'error'); return; }
    if (amount > safeNumber(p.remaining)) {
        showToast(`⚠️ ${currentLang==='ar'?'المبلغ أكبر من المتبقي':'Amount exceeds remaining'}`, 'error');
        return;
    }
    if (!Array.isArray(p.payments)) p.payments = [];
    p.payments.push({ date, amount, method });
    p.paidAmount = safeNumber(p.paidAmount) + amount;
    p.remaining = Math.max(0, safeNumber(p.totalAmount) - p.paidAmount);

    if (!Array.isArray(p.visits)) p.visits = [];
    p.visits.push({
        date,
        procedure: currentLang==='ar'?'دفعة':'Payment',
        procedurePrice: 0,
        payment: amount,
        notes: `دفعة ${method}`
    });

    saveData();
    renderAll();
    closeModalById('paymentModal');
    if (state.currentPatientId) openPatientFile(state.currentPatientId);
    showToast(t('toast.saved'), 'success');
}

/* ============================================================
   23) DELETE FROM PATIENT FILE
   ============================================================ */
function showDeleteConfirm(type, index) {
    const p = state.data.patients.find(x => x.id === state.currentPatientId);
    if (!p) return;
    state.deleteType = type;
    state.deleteTarget = index;

    let msg = '';
    if (type === 'procedure') msg = index === 'all' ? 'حذف جميع الإجراءات؟' : `حذف "${p.procedures[index]}"؟`;
    else if (type === 'payment') msg = index === 'all' ? 'حذف جميع الدفعات؟' : `حذف الدفعة؟`;
    else if (type === 'visit') msg = index === 'all' ? 'حذف جميع الزيارات؟' : `حذف الزيارة؟`;

    showConfirmDialog(msg, () => {
        if (type === 'procedure') {
            if (index === 'all') p.procedures = [];
            else p.procedures.splice(index, 1);
        } else if (type === 'payment') {
            if (index === 'all') {
                p.payments = [];
                p.paidAmount = 0;
                p.remaining = safeNumber(p.totalAmount);
            } else {
                p.payments.splice(index, 1);
                p.paidAmount = p.payments.reduce((s,x) => s + safeNumber(x.amount), 0);
                p.remaining = Math.max(0, safeNumber(p.totalAmount) - p.paidAmount);
            }
        } else if (type === 'visit') {
            if (index === 'all') p.visits = [];
            else p.visits.splice(index, 1);
            updateFirstVisit(p);
        }
        saveData(); renderAll();
        if (state.currentPatientId) openPatientFile(state.currentPatientId);
        showToast(t('toast.deleted'), 'warning');
    });
}

/* ============================================================
   24) BEAUTY FILE
   ============================================================ */
function openBeautyFile(id) {
    const b = state.data.beauty.find(x => x.id === id);
    if (!b) return;
    const title = $('beautyFileName');
    if (title) title.textContent = `📋 ${b.name}`;
    const c = $('beautyFileContent');
    if (!c) return;
    c.innerHTML = `
        <div class="patient-file-info">
            <div class="field"><label>${currentLang==='ar'?'الاسم':'Name'}</label><div class="value">${escapeHTML(b.name)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الهاتف':'Phone'}</label><div class="value">${escapeHTML(b.phone)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الخدمة':'Service'}</label><div class="value">${escapeHTML(b.service||'-')}</div></div>
            <div class="field"><label>${currentLang==='ar'?'التقدم':'Progress'}</label><div class="value">${safeNumber(b.progress)}%</div></div>
            <div class="field"><label>${currentLang==='ar'?'المتبقي':'Remaining'}</label><div class="value">${formatCurrency(b.remaining)}</div></div>
        </div>
        <div class="patient-file-section">
            <h4>💰 ${currentLang==='ar'?'المالية':'Financial'}</h4>
            <div class="info-grid">
                <div class="info-item"><span class="label">${t('table.total')}</span><span class="val">${formatCurrency(b.totalAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.paid')}</span><span class="val">${formatCurrency(b.paidAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.remaining')}</span><span class="val">${formatCurrency(b.remaining)}</span></div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn-secondary" data-close-modal="beautyFileModal">${t('common.close')}</button>
        </div>
    `;
    openModal('beautyFileModal');
}

/* ============================================================
   25) FORM MODAL (beauty / rental / expense)
   ============================================================ */
function openForm(type, editData = null) {
    const permKey = type === 'expense' ? 'expenses' : type;
    if (editData && !canEdit(permKey)) { showToast(t('toast.noPermission'), 'error'); return; }
    if (!editData && !canCreate(permKey)) { showToast(t('toast.noPermission'), 'error'); return; }

    state.formType = type;
    state.editingId = editData?.id || null;
    state.materialsList = editData?.materials ? [...editData.materials] : [];

    const titles = {
        beauty: editData ? 'تعديل عميل' : 'إضافة عميل',
        rental: editData ? 'تعديل حجز' : 'إضافة حجز',
        expense: editData ? 'تعديل مصروف' : 'إضافة مصروف'
    };
    const titleEl = $('formTitle');
    if (titleEl) titleEl.textContent = titles[type] || '';

    let html = '';
    if (type === 'beauty') html = beautyFormHTML(editData);
    else if (type === 'rental') html = rentalFormHTML(editData);
    else if (type === 'expense') html = expenseFormHTML(editData);

    const f = $('formFields');
    if (f) f.innerHTML = html;

    openModal('formModal');

    if (type === 'rental') {
        setTimeout(() => {
            renderMaterialsList();
            calculateRental();
            bindRentalInputs();
            checkConflict();
        }, 50);
    }
}

function beautyFormHTML(e) {
    return `
        <div class="form-group"><label>${currentLang==='ar'?'الاسم':'Name'}</label><input type="text" id="f_name" value="${escapeHTML(e?.name||'')}" required /></div>
        <div class="form-group"><label>${currentLang==='ar'?'الهاتف':'Phone'}</label><input type="text" id="f_phone" value="${escapeHTML(e?.phone||'')}" required /></div>
        <div class="form-group"><label>${currentLang==='ar'?'الخدمة':'Service'}</label><input type="text" id="f_service" value="${escapeHTML(e?.service||'')}" required /></div>
        <div class="form-group"><label>${currentLang==='ar'?'التقدم %':'Progress %'}</label><input type="number" id="f_progress" value="${safeNumber(e?.progress)}" min="0" max="100" /></div>
        <div class="form-row-2">
            <div class="form-group"><label>${t('table.total')}</label><input type="number" id="f_total" value="${safeNumber(e?.totalAmount)}" oninput="calcRemain()" /></div>
            <div class="form-group"><label>${t('table.paid')}</label><input type="number" id="f_paid" value="${safeNumber(e?.paidAmount)}" oninput="calcRemain()" /></div>
        </div>
        <div class="form-group"><label>${t('table.remaining')}</label><input type="number" id="f_remaining" value="${safeNumber(e?.remaining)}" readonly /></div>
        <div class="form-group"><label>${currentLang==='ar'?'ملاحظات':'Notes'}</label><input type="text" id="f_notes" value="${escapeHTML(e?.notes||'')}" /></div>
    `;
}

function rentalFormHTML(e) {
    const today = todayStr();
    const clinics = state.data.config.clinics.filter(c => c.status !== 'disabled').sort((a,b)=>(a.order||0)-(b.order||0));
    const selectedClinic = e?.clinic || clinics[0]?.name || '';
    const selectedClinicObj = clinics.find(c => c.name === selectedClinic);
    const pricing = normalizePricing((selectedClinicObj && selectedClinicObj.pricing) || state.data.config.rentalPrices);

    return `
        <div class="form-group"><label>${t('table.clinic')}</label>
            <select id="f_clinic">${clinics.map(c => `<option value="${escapeHTML(c.name)}" ${c.name===selectedClinic?'selected':''}>${escapeHTML(c.name)}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label>${t('table.tenant')}</label><input type="text" id="f_tenant" value="${escapeHTML(e?.tenant||'')}" required /></div>
        <div class="form-group"><label>${t('table.phone')}</label><input type="text" id="f_phone" value="${escapeHTML(e?.phone||'')}" required /></div>

        <div class="form-row-2">
            <div class="form-group"><label>${currentLang==='ar'?'من تاريخ':'From Date'}</label>
                <input type="date" id="f_startDate" value="${escapeHTML(e?.startDate || e?.date || today)}" />
            </div>
            <div class="form-group"><label>${currentLang==='ar'?'إلى تاريخ':'To Date'}</label>
                <input type="date" id="f_endDate" value="${escapeHTML(e?.endDate || e?.date || today)}" />
            </div>
        </div>
        <div class="form-row-2">
            <div class="form-group"><label>${currentLang==='ar'?'من وقت':'From Time'}</label>
                <input type="time" id="f_start" value="${escapeHTML(e?.startTime||'09:00')}" />
            </div>
            <div class="form-group"><label>${currentLang==='ar'?'إلى وقت':'To Time'}</label>
                <input type="time" id="f_end" value="${escapeHTML(e?.endTime||'12:00')}" />
            </div>
        </div>
        <div class="form-group"><label>${t('table.hours')}</label><input type="number" id="f_hours" value="${safeNumber(e?.hours)}" readonly /></div>

        <div class="pricing-info" id="pricingInfo">
            ${renderPricingInfoHTML(pricing)}
        </div>

        <div style="background:var(--warning);padding:10px;border-radius:8px;margin:10px 0;">
            <label style="font-weight:600;">${currentLang==='ar'?'🔧 المواد والأدوات':'🔧 Materials'}</label>
            <div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap;">
                <input type="text" id="f_materialName" placeholder="${currentLang==='ar'?'الاسم':'Name'}" style="flex:2;min-width:80px;padding:6px 10px;border:1px solid var(--border);border-radius:6px;background:var(--bg);" />
                <input type="number" id="f_materialPrice" placeholder="${currentLang==='ar'?'السعر':'Price'}" style="flex:1;min-width:60px;padding:6px 10px;border:1px solid var(--border);border-radius:6px;background:var(--bg);" />
                <button type="button" class="btn-primary" id="addMaterialBtn">+</button>
            </div>
            <div id="materialsList" style="margin-top:6px;"></div>
            <div style="display:flex;justify-content:space-between;font-weight:600;margin-top:6px;padding-top:6px;border-top:1px solid var(--border);">
                <span>${currentLang==='ar'?'إجمالي المواد':'Materials total'}:</span>
                <span id="totalMaterialsPrice">${formatCurrency(0)}</span>
            </div>
        </div>
        <div style="background:var(--success);padding:10px;border-radius:8px;color:#fff;margin:10px 0;">
            <label style="color:#fff;font-weight:600;">💰 ${t('table.total')}</label>
            <input type="number" id="f_totalPrice" value="${safeNumber(e?.totalPrice)}" readonly style="background:rgba(255,255,255,0.2);color:#fff;font-weight:700;font-size:16px;width:100%;padding:6px;border:none;border-radius:4px;" />
        </div>
        <div class="form-row-2">
            <div class="form-group"><label>${t('table.paid')}</label><input type="number" id="f_paidAmount" value="${safeNumber(e?.paidAmount)}" /></div>
            <div class="form-group"><label>${t('table.remaining')}</label><input type="number" id="f_remainingAmount" value="${safeNumber(e?.remaining)}" readonly /></div>
        </div>
        <div class="form-group"><label>${t('table.status')}</label>
            <select id="f_status">
                <option value="مدفوع" ${e?.status==='مدفوع'?'selected':''}>${currentLang==='ar'?'مدفوع':'Paid'}</option>
                <option value="متبقي" ${e?.status==='متبقي'?'selected':''}>${currentLang==='ar'?'متبقي':'Outstanding'}</option>
                <option value="متأخر" ${e?.status==='متأخر'?'selected':''}>${currentLang==='ar'?'متأخر':'Late'}</option>
            </select>
        </div>
        <div id="conflictWarning" style="display:none;background:var(--danger);color:#fff;padding:8px;border-radius:6px;margin-top:6px;font-size:13px;">
            ${t('toast.conflict')}
        </div>
    `;
}

function renderPricingInfoHTML(pricing) {
    const modeLabel = pricing.shiftMode === 'hours'
        ? `${currentLang==='ar'?'عدد ساعات':'Hours'}: ${pricing.shiftHours}h`
        : `${currentLang==='ar'?'نطاق':'Range'}: ${pricing.shiftMinHours}-${pricing.shiftMaxHours}h`;
    return `💰 ${currentLang==='ar'?'الأسعار (هذه العيادة)':'Prices (this clinic)'}:
        ${currentLang==='ar'?'ساعة':'Hour'} ${pricing.pricePerHour} |
        ${currentLang==='ar'?'شيفت':'Shift'} (${modeLabel}) ${pricing.shiftPrice} |
        ${currentLang==='ar'?'إضافية':'Extra'} ${pricing.extraHourPrice} |
        ${currentLang==='ar'?'يوم':'Day'} (${pricing.fullDayHours}h) ${pricing.fullDayPrice}`;
}

function expenseFormHTML(e) {
    return `
        <div class="form-group"><label>${t('table.category')}</label>
            <select id="f_category">
                <option value="رواتب">${currentLang==='ar'?'رواتب':'Salaries'}</option>
                <option value="مواد طبية">${currentLang==='ar'?'مواد طبية':'Medical supplies'}</option>
                <option value="كهرباء">${currentLang==='ar'?'كهرباء':'Electricity'}</option>
                <option value="إنترنت">${currentLang==='ar'?'إنترنت':'Internet'}</option>
                <option value="إيجار">${currentLang==='ar'?'إيجار':'Rent'}</option>
                <option value="صيانة">${currentLang==='ar'?'صيانة':'Maintenance'}</option>
                <option value="تسويق">${currentLang==='ar'?'تسويق':'Marketing'}</option>
                <option value="أخرى">${currentLang==='ar'?'أخرى':'Other'}</option>
            </select></div>
        <div class="form-group"><label>${t('table.amount')}</label><input type="number" id="f_amount" value="${safeNumber(e?.amount)}" required /></div>
        <div class="form-group"><label>${t('table.date')}</label><input type="date" id="f_date" value="${escapeHTML(e?.date||todayStr())}" required /></div>
        <div class="form-group"><label>${t('table.description')}</label><input type="text" id="f_description" value="${escapeHTML(e?.description||'')}" /></div>
    `;
}

function calcRemain() {
    const total = safeNumber($('f_total')?.value);
    const paid = safeNumber($('f_paid')?.value);
    if ($('f_remaining')) $('f_remaining').value = Math.max(0, total - paid);
}

function bindRentalInputs() {
    ['f_startDate','f_endDate','f_start','f_end','f_paidAmount'].forEach(id => {
        $(id)?.addEventListener('input', () => {
            calculateRental();
            checkConflict();
        });
    });
    $('f_clinic')?.addEventListener('change', () => {
        updateRentalPricingInfo();
        calculateRental();
        checkConflict();
    });
    $('addMaterialBtn')?.addEventListener('click', addMaterial);
}

function updateRentalPricingInfo() {
    const clinicName = $('f_clinic')?.value;
    const clinic = state.data.config.clinics.find(c => c.name === clinicName);
    const pricing = normalizePricing((clinic && clinic.pricing) || state.data.config.rentalPrices);
    const info = $('pricingInfo');
    if (!info) return;
    info.innerHTML = renderPricingInfoHTML(pricing);
}

function calculateRental() {
    const startDateStr = $('f_startDate')?.value;
    const endDateStr = $('f_endDate')?.value;
    const startTimeStr = $('f_start')?.value;
    const endTimeStr = $('f_end')?.value;
    const clinicName = $('f_clinic')?.value;

    const clinic = state.data.config.clinics.find(c => c.name === clinicName);
    const pricing = normalizePricing((clinic && clinic.pricing) || state.data.config.rentalPrices);

    if (!startDateStr || !endDateStr || !startTimeStr || !endTimeStr) return;

    const startDT = parseDateTime(startDateStr, startTimeStr);
    const endDT = parseDateTime(endDateStr, endTimeStr);
    if (!startDT || !endDT) return;

    let hours = hoursBetween(startDT, endDT);
    if (hours < 0) hours = 0;

    if ($('f_hours')) $('f_hours').value = hours.toFixed(1);

    const basePrice = computeRentalPrice(hours, pricing);
    const totalMaterials = state.materialsList.reduce((s,m) => s + safeNumber(m.price), 0);
    const total = basePrice + totalMaterials;

    if ($('f_totalPrice')) $('f_totalPrice').value = total.toFixed(2);
    const paid = safeNumber($('f_paidAmount')?.value);
    if ($('f_remainingAmount')) $('f_remainingAmount').value = Math.max(0, total - paid);
}

function computeRentalPrice(hours, pricing) {
    if (hours <= 0) return 0;
    pricing = normalizePricing(pricing);
    const {
        pricePerHour, shiftPrice, shiftMode,
        shiftMinHours, shiftMaxHours, shiftHours,
        extraHourPrice, fullDayPrice, fullDayHours
    } = pricing;

    if (fullDayHours > 0 && hours >= fullDayHours) {
        const fullDays = Math.floor(hours / fullDayHours);
        const remainder = hours - (fullDays * fullDayHours);
        return (fullDays * fullDayPrice) + computeRentalPrice(remainder, pricing);
    }

    const shiftStart = shiftMode === 'hours' ? 0 : safeNumber(shiftMinHours);
    const shiftEnd   = shiftMode === 'hours' ? safeNumber(shiftHours) : safeNumber(shiftMaxHours);

    if (hours <= shiftStart) {
        return hours * pricePerHour;
    }
    if (hours <= shiftEnd) {
        return shiftPrice;
    }
    return shiftPrice + (hours - shiftEnd) * extraHourPrice;
}

function addMaterial() {
    const name = $('f_materialName')?.value.trim();
    const price = safeNumber($('f_materialPrice')?.value);
    if (!name || price <= 0) { showToast('⚠️ Invalid material', 'warning'); return; }
    state.materialsList.push({ name, price });
    if ($('f_materialName')) $('f_materialName').value = '';
    if ($('f_materialPrice')) $('f_materialPrice').value = '';
    renderMaterialsList();
    calculateRental();
}
function removeMaterial(idx) {
    state.materialsList.splice(idx, 1);
    renderMaterialsList();
    calculateRental();
}
function renderMaterialsList() {
    const c = $('materialsList');
    if (!c) return;
    if (!state.materialsList.length) {
        c.innerHTML = `<div style="color:var(--text-light);font-size:13px;padding:4px;">${t('common.none')}</div>`;
        if ($('totalMaterialsPrice')) $('totalMaterialsPrice').textContent = formatCurrency(0);
        return;
    }
    c.innerHTML = state.materialsList.map((m, i) => `
        <div style="display:flex;justify-content:space-between;padding:3px 8px;background:var(--card);border-radius:4px;margin-bottom:3px;font-size:13px;">
            <span>${escapeHTML(m.name)}</span>
            <span>${formatCurrency(m.price)} <button type="button" class="close-btn" style="font-size:12px;" data-rm="${i}">✕</button></span>
        </div>
    `).join('');
    const total = state.materialsList.reduce((s,m) => s + safeNumber(m.price), 0);
    if ($('totalMaterialsPrice')) $('totalMaterialsPrice').textContent = formatCurrency(total);
    c.querySelectorAll('[data-rm]').forEach(b => b.addEventListener('click', () => removeMaterial(parseInt(b.getAttribute('data-rm')))));
}

function isRentalConflict(startDT, endDT, clinicName, excludeId = null) {
    if (!startDT || !endDT) return false;
    const s = startDT.getTime();
    const e = endDT.getTime();
    return state.data.rentals.some(r => {
        if (r.id === excludeId) return false;
        if (r.clinic !== clinicName) return false;
        const rS = parseDateTime(r.startDate || r.date, r.startTime);
        const rE = parseDateTime(r.endDate || r.date, r.endTime);
        if (!rS || !rE) return false;
        return (s < rE.getTime()) && (rS.getTime() < e);
    });
}

function checkConflict() {
    const w = $('conflictWarning');
    if (!w) return;
    const startDateStr = $('f_startDate')?.value;
    const endDateStr = $('f_endDate')?.value;
    const startTimeStr = $('f_start')?.value;
    const endTimeStr = $('f_end')?.value;
    const clinicName = $('f_clinic')?.value;

    if (!startDateStr || !endDateStr || !startTimeStr || !endTimeStr || !clinicName) return;

    const startDT = parseDateTime(startDateStr, startTimeStr);
    const endDT = parseDateTime(endDateStr, endTimeStr);
    if (!startDT || !endDT) return;

    if (endDT.getTime() <= startDT.getTime()) {
        w.style.display = 'block';
        w.textContent = t('toast.invalidDateRange');
        return;
    }
    if (hoursBetween(startDT, endDT) > 24) {
        w.style.display = 'block';
        w.textContent = t('toast.maxDurationExceeded');
        return;
    }
    if (isRentalConflict(startDT, endDT, clinicName, state.editingId)) {
        w.style.display = 'block';
        w.textContent = t('toast.conflict');
        return;
    }
    w.style.display = 'none';
}

function saveForm(e) {
    e.preventDefault();
    const getVal = id => $(id)?.value || '';

    if (state.formType === 'beauty') {
        if (isDuplicate('beauty', getVal('f_phone'), state.editingId)) {
            showToast(t('toast.duplicate'), 'error'); return;
        }
        const total = safeNumber(getVal('f_total'));
        const paid = safeNumber(getVal('f_paid'));
        const existing = state.editingId ? state.data.beauty.find(x => x.id === state.editingId) : null;
        const item = {
            id: existing?.id || generateId(),
            name: getVal('f_name').trim(),
            phone: getVal('f_phone').trim(),
            service: getVal('f_service').trim(),
            progress: parseInt(getVal('f_progress')) || 0,
            totalAmount: total,
            paidAmount: paid,
            remaining: Math.max(0, total - paid),
            notes: getVal('f_notes'),
            visits: existing?.visits ? [...existing.visits] : [],
            payments: existing?.payments ? [...existing.payments] : []
        };
        if (existing) {
            const i = state.data.beauty.findIndex(x => x.id === existing.id);
            state.data.beauty[i] = item;
        } else state.data.beauty.push(item);
        addActivity(existing ? 'تعديل عميل' : 'إضافة عميل', item.name);
    } else if (state.formType === 'rental') {
        const startDate = getVal('f_startDate');
        const endDate = getVal('f_endDate');
        const startTime = getVal('f_start');
        const endTime = getVal('f_end');
        const clinic = getVal('f_clinic');

        if (!startDate || !endDate || !startTime || !endTime) {
            showToast(t('toast.requiredFields'), 'error'); return;
        }

        const startDT = parseDateTime(startDate, startTime);
        const endDT = parseDateTime(endDate, endTime);
        if (!startDT || !endDT) { showToast(t('toast.requiredFields'), 'error'); return; }
        if (endDT.getTime() <= startDT.getTime()) {
            showToast(t('toast.invalidDateRange'), 'error'); return;
        }
        const totalHours = hoursBetween(startDT, endDT);
        if (totalHours > 24) {
            showToast(t('toast.maxDurationExceeded'), 'error'); return;
        }
        if (isRentalConflict(startDT, endDT, clinic, state.editingId)) {
            showToast(t('toast.conflict'), 'error'); return;
        }

        const clinicObj = state.data.config.clinics.find(c => c.name === clinic);
        const pricing = normalizePricing((clinicObj && clinicObj.pricing) || state.data.config.rentalPrices);
        const basePrice = computeRentalPrice(totalHours, pricing);
        const totalMaterials = state.materialsList.reduce((s,m) => s + safeNumber(m.price), 0);
        const totalPrice = basePrice + totalMaterials;
        const paidAmount = safeNumber(getVal('f_paidAmount'));

        const item = {
            id: state.editingId || generateId(),
            clinic, tenant: getVal('f_tenant').trim(), phone: getVal('f_phone').trim(),
            startDate, endDate, startTime, endTime,
            date: startDate,
            hours: totalHours,
            pricing: Object.assign({}, pricing),
            totalPrice, paidAmount,
            remaining: Math.max(0, totalPrice - paidAmount),
            materials: [...state.materialsList],
            totalMaterialsPrice: totalMaterials,
            status: getVal('f_status')
        };
        if (state.editingId) {
            const i = state.data.rentals.findIndex(x => x.id === state.editingId);
            if (i !== -1) state.data.rentals[i] = item;
        } else state.data.rentals.push(item);
        state.materialsList = [];
        addActivity(state.editingId ? 'تعديل حجز' : 'إضافة حجز', `${clinic} - ${item.tenant}`);
    } else if (state.formType === 'expense') {
        const item = {
            id: state.editingId || generateId(),
            category: getVal('f_category'),
            amount: safeNumber(getVal('f_amount')),
            date: getVal('f_date'),
            description: getVal('f_description')
        };
        if (state.editingId) {
            const i = state.data.expenses.findIndex(x => x.id === state.editingId);
            if (i !== -1) state.data.expenses[i] = item;
        } else state.data.expenses.push(item);
        addActivity(state.editingId ? 'تعديل مصروف' : 'إضافة مصروف', item.category);
    }

    saveData();
    renderAll();
    closeModalById('formModal');
    state.editingId = null;
    state.formType = null;
    state.materialsList = [];
    showToast(t('toast.saved'), 'success');
}

function editItem(type, id) {
    let item = null;
    if (type === 'beauty') item = state.data.beauty.find(x => x.id === id);
    else if (type === 'rental') item = state.data.rentals.find(x => x.id === id);
    else if (type === 'expense') item = state.data.expenses.find(x => x.id === id);
    if (item) openForm(type, item);
}

function deleteItem(type, id) {
    let name = '';
    if (type === 'beauty') {
        const b = state.data.beauty.find(x => x.id === id); name = b?.name || '';
        showConfirmDialog(`حذف "${name}"؟`, () => {
            state.data.beauty = state.data.beauty.filter(x => x.id !== id);
            saveData(); renderAll();
            showToast(t('toast.deleted'), 'warning');
        });
    } else if (type === 'rental') {
        const r = state.data.rentals.find(x => x.id === id); name = r?.tenant || '';
        showConfirmDialog(`حذف "${name}"؟`, () => {
            state.data.rentals = state.data.rentals.filter(x => x.id !== id);
            saveData(); renderAll();
            showToast(t('toast.deleted'), 'warning');
        });
    } else if (type === 'expense') {
        const e = state.data.expenses.find(x => x.id === id); name = e?.category || '';
        showConfirmDialog(`حذف "${name}"؟`, () => {
            state.data.expenses = state.data.expenses.filter(x => x.id !== id);
            saveData(); renderAll();
            showToast(t('toast.deleted'), 'warning');
        });
    }
}

/* ============================================================
   26) REPORTS
   ============================================================ */
function showReportType(type) {
    if (!canView('reports')) { showToast(t('toast.noPermission'), 'error'); return; }
    $$('#reportTabs .tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-report') === type));
    const grid = $('reportsGrid');
    if (!grid) return;

    const totalRevenue = (() => {
        let tot = 0;
        state.data.patients.forEach(p => tot += safeNumber(p.paidAmount));
        state.data.beauty.forEach(b => tot += safeNumber(b.paidAmount));
        state.data.rentals.forEach(r => tot += safeNumber(r.paidAmount));
        Object.values(state.data.departmentsData || {}).forEach(dd => {
            (dd.items || []).forEach(it => tot += safeNumber(it.paidAmount));
        });
        return tot;
    })();
    const totalExpenses = state.data.expenses.reduce((s,e) => s + safeNumber(e.amount), 0);
    const net = totalRevenue - totalExpenses;

    let html = '';
    if (type === 'overview') {
        html = `
            <div class="report-card"><h4>${currentLang==='ar'?'المرضى':'Patients'}</h4><p>${state.data.patients.length}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'العملاء':'Clients'}</h4><p>${state.data.beauty.length}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'الإيرادات':'Revenue'}</h4><p>${formatCurrency(totalRevenue)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'المصروفات':'Expenses'}</h4><p>${formatCurrency(totalExpenses)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'صافي الربح':'Net Profit'}</h4><p>${formatCurrency(net)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'أفضل عيادة':'Top Clinic'}</h4><p>${escapeHTML(getTopClinic())}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'أكثر خدمة':'Top Service'}</h4><p>${escapeHTML(getTopService())}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'مدفوعات متأخرة':'Outstanding'}</h4><p>${state.data.patients.filter(p => safeNumber(p.remaining) > 0).length + state.data.rentals.filter(r => safeNumber(r.remaining) > 0).length}</p></div>
        `;
    } else if (type === 'patients') {
        const avgAge = state.data.patients.length ? Math.round(state.data.patients.reduce((s,p) => s + safeNumber(p.age), 0) / state.data.patients.length) : 0;
        html = `
            <div class="report-card"><h4>${currentLang==='ar'?'إجمالي المرضى':'Total Patients'}</h4><p>${state.data.patients.length}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'متبقي عليهم':'With Balance'}</h4><p>${state.data.patients.filter(p => safeNumber(p.remaining) > 0).length}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'متوسط العمر':'Avg Age'}</h4><p>${avgAge}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'أكثر إجراء':'Top Procedure'}</h4><p>${escapeHTML(getTopProcedure())}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إجمالي المتبقي':'Total Remaining'}</h4><p>${formatCurrency(state.data.patients.reduce((s,p) => s + safeNumber(p.remaining), 0))}</p></div>
        `;
    } else if (type === 'financial') {
        html = `
            <div class="report-card"><h4>${currentLang==='ar'?'الإيرادات':'Revenue'}</h4><p>${formatCurrency(totalRevenue)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'المصروفات':'Expenses'}</h4><p>${formatCurrency(totalExpenses)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'صافي الربح':'Net Profit'}</h4><p style="color:${net >= 0 ? 'var(--success)' : 'var(--danger)'}">${formatCurrency(net)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إيرادات الأسنان':'Dental Revenue'}</h4><p>${formatCurrency(state.data.patients.reduce((s,p) => s + safeNumber(p.totalAmount), 0))}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إيرادات التجميل':'Beauty Revenue'}</h4><p>${formatCurrency(state.data.beauty.reduce((s,b) => s + safeNumber(b.totalAmount), 0))}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إيرادات التأجير':'Rental Revenue'}</h4><p>${formatCurrency(state.data.rentals.reduce((s,r) => s + safeNumber(r.totalPrice), 0))}</p></div>
        `;
    } else if (type === 'rental') {
        const total = state.data.rentals.reduce((s,r) => s + safeNumber(r.totalPrice), 0);
        const paidCount = state.data.rentals.filter(r => r.status === 'مدفوع').length;
        const totalRem = state.data.rentals.reduce((s,r) => s + safeNumber(r.remaining), 0);
        html = `
            <div class="report-card"><h4>${currentLang==='ar'?'إجمالي الحجوزات':'Total Bookings'}</h4><p>${state.data.rentals.length}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إيرادات التأجير':'Rental Revenue'}</h4><p>${formatCurrency(total)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'مدفوعة':'Paid'}</h4><p>${paidCount}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'متبقية':'Outstanding'}</h4><p>${state.data.rentals.length - paidCount}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'إجمالي المتبقي':'Total Remaining'}</h4><p style="color:var(--danger);">${formatCurrency(totalRem)}</p></div>
            <div class="report-card"><h4>${currentLang==='ar'?'أفضل عيادة':'Top Clinic'}</h4><p>${escapeHTML(getTopClinic())}</p></div>
        `;
    }
    grid.innerHTML = html;
}

function getTopProcedure() {
    const m = {};
    state.data.patients.forEach(p => (p.procedures||[]).forEach(pr => m[pr] = (m[pr]||0)+1));
    let top = '-', max = 0;
    for (const [k,v] of Object.entries(m)) if (v > max) { max = v; top = k; }
    return top;
}
function getTopService() {
    const m = {};
    state.data.beauty.forEach(b => { if (b.service) m[b.service] = (m[b.service]||0)+1; });
    let top = '-', max = 0;
    for (const [k,v] of Object.entries(m)) if (v > max) { max = v; top = k; }
    return top;
}
function getTopClinic() {
    const m = {};
    state.data.rentals.forEach(r => { if (r.clinic) m[r.clinic] = (m[r.clinic]||0)+1; });
    let top = '-', max = 0;
    for (const [k,v] of Object.entries(m)) if (v > max) { max = v; top = k; }
    return top;
}

/* ============================================================
   27) BACKUP
   ============================================================ */
function startAutoBackup() {
    if (state.backupInterval) clearInterval(state.backupInterval);
    state.backupInterval = setInterval(() => {
        try {
            localStorage.setItem(STORAGE_KEYS.autoBackup, JSON.stringify({
                data: state.data,
                timestamp: new Date().toISOString(),
                schemaVersion: CURRENT_SCHEMA_VERSION
            }));
        } catch(e) { }
    }, 5 * 60 * 1000);
}

function exportData() {
    const blob = new Blob([JSON.stringify({
        data: state.data,
        exportDate: new Date().toISOString(),
        schemaVersion: CURRENT_SCHEMA_VERSION
    }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `clinic-backup-${todayStr()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t('toast.exported'), 'success');
    addActivity('تصدير البيانات', '');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        try {
            const parsed = JSON.parse(ev.target.result);
            if (!parsed || typeof parsed !== 'object') throw new Error('bad');
            const incoming = parsed.data || parsed;
            const { data: migrated } = detectAndMigrate(incoming);
            state.data = migrated;
            saveData();
            applyBranding();
            renderSidebar();
            renderAll();
            showToast(t('toast.imported'), 'success');
            addActivity('استيراد البيانات', '');
        } catch (err) {
            showToast(t('toast.importFail'), 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function restoreBackup() {
    const raw = localStorage.getItem(STORAGE_KEYS.autoBackup);
    if (!raw) { showToast(t('toast.noBackup'), 'warning'); return; }
    showConfirmDialog(
        currentLang==='ar' ? 'استعادة النسخة الاحتياطية؟ سيتم استبدال البيانات الحالية.' : 'Restore backup? Current data will be replaced.',
        () => {
            try {
                const parsed = JSON.parse(raw);
                if (parsed.data) {
                    const { data: migrated } = detectAndMigrate(parsed.data);
                    state.data = migrated;
                    saveData();
                    applyBranding();
                    renderSidebar();
                    renderAll();
                    showToast(t('toast.restored'), 'success');
                }
            } catch (e) {
                showToast(t('toast.importFail'), 'error');
            }
        }
    );
}

/* ============================================================
   28) SEARCH
   ============================================================ */
const runGlobalSearch = debounce(function(query) {
    if (!query) return;
    const q = query.toLowerCase();
    const results = [];
    state.data.patients.forEach(p => {
        if ((p.name||'').toLowerCase().includes(q) || (p.phone||'').includes(q)) {
            results.push({ type: '🦷', name: p.name, phone: p.phone, id: p.id, action: 'open-patient' });
        }
    });
    state.data.beauty.forEach(b => {
        if ((b.name||'').toLowerCase().includes(q) || (b.phone||'').includes(q)) {
            results.push({ type: '💆', name: b.name, phone: b.phone, id: b.id, action: 'open-beauty' });
        }
    });
    state.data.rentals.forEach(r => {
        if ((r.tenant||'').toLowerCase().includes(q) || (r.phone||'').includes(q)) {
            results.push({ type: '🏢', name: r.tenant, phone: r.phone, id: r.id, action: 'edit-rental' });
        }
    });
    Object.entries(state.data.departmentsData || {}).forEach(([deptId, dd]) => {
        const dept = state.data.config.departments.find(d => d.id === deptId);
        if (!dept) return;
        (dd.items || []).forEach(it => {
            if ((it.name||'').toLowerCase().includes(q) || (it.phone||'').includes(q)) {
                results.push({ type: '📁', name: it.name, phone: it.phone, id: it.id, deptId, action: 'open-dynamic' });
            }
        });
    });
    showSearchResults(results, query);
}, 250);

function globalSearch() {
    const q = $('globalSearch')?.value.trim();
    if (!q) { showToast(t('search.hint'), 'info'); return; }
    runGlobalSearch(q);
}

function showSearchResults(results, query) {
    const c = $('searchResultsContent');
    if (!c) return;
    if (!results.length) {
        c.innerHTML = `<div style="text-align:center;padding:30px;color:var(--text-light);">
            <i class="fas fa-search" style="font-size:40px;display:block;margin-bottom:12px;"></i>
            <p>${t('search.empty')} "<strong>${escapeHTML(query)}</strong>"</p></div>`;
    } else {
        c.innerHTML = `
            <div style="margin-bottom:12px;font-size:13px;color:var(--text-light);">
                <strong>${results.length}</strong> ${currentLang==='ar'?'نتيجة':'results'} — "<strong>${escapeHTML(query)}</strong>"
            </div>
            ${results.map(r => `
                <div class="search-result-item" data-action="${r.action}" data-id="${escapeHTML(r.id)}" data-dept="${escapeHTML(r.deptId||'')}">
                    <div>
                        <span class="result-name">${escapeHTML(r.name)}</span>
                        <span class="result-phone"> - ${escapeHTML(r.phone||'')}</span>
                    </div>
                    <div>
                        <span class="result-type">${r.type}</span>
                        <span class="result-action">→ ${t('common.view')}</span>
                    </div>
                </div>
            `).join('')}
        `;
        c.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                const action = el.getAttribute('data-action');
                const id = el.getAttribute('data-id');
                const deptId = el.getAttribute('data-dept');
                closeModalById('searchResultsModal');
                if (action === 'open-patient') openPatientFile(id);
                else if (action === 'open-beauty') openBeautyFile(id);
                else if (action === 'edit-rental') editItem('rental', id);
                else if (action === 'open-dynamic') openDynamicItemFile(deptId, id);
            });
        });
    }
    openModal('searchResultsModal');
}

function clearSearch() {
    const el = $('globalSearch'); if (el) el.value = '';
    closeModalById('searchResultsModal');
}

/* ============================================================
   29) SETTINGS — Main Dispatcher
   ============================================================ */
function renderSettingsTab(tab) {
    state.settingsTab = tab;
    $$('#settingsTabs .tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tab));
    const panel = $('settingsPanel');
    if (!panel) return;

    if (tab === 'clinic') panel.innerHTML = renderClinicSettings();
    else if (tab === 'branding') panel.innerHTML = renderBrandingSettings();
    else if (tab === 'departments') panel.innerHTML = renderDepartmentsSettings();
    else if (tab === 'clinics') panel.innerHTML = renderClinicsSettings();
    else if (tab === 'services') panel.innerHTML = renderServicesSettings();
    else if (tab === 'rentalPricing') panel.innerHTML = renderRentalPricingSettings();
    else if (tab === 'users') panel.innerHTML = renderUsersSettings();
    else if (tab === 'system') panel.innerHTML = renderSystemSettings();

    bindSettingsActions();
}

/* ============================================================
   30) SETTINGS — Clinic Info
   ============================================================ */
function renderClinicSettings() {
    const c = state.data.config.clinicInfo;
    const logoIsImage = isImageLogo(c.logo);
    return `
        <div class="settings-section">
            <h3>🏥 ${currentLang==='ar'?'بيانات العيادة':'Clinic Information'}</h3>
            <div class="settings-grid">
                <div class="form-group"><label>${currentLang==='ar'?'الاسم بالعربية':'Name (Arabic)'}</label><input type="text" id="cfg_nameAr" value="${escapeHTML(c.nameAr)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'الاسم بالإنجليزية':'Name (English)'}</label><input type="text" id="cfg_nameEn" value="${escapeHTML(c.nameEn)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'الشعار النصي':'Tagline'}</label><input type="text" id="cfg_tagline" value="${escapeHTML(c.tagline)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'الهاتف':'Phone'}</label><input type="text" id="cfg_phone" value="${escapeHTML(c.phone)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'واتساب':'WhatsApp'}</label><input type="text" id="cfg_whatsapp" value="${escapeHTML(c.whatsapp)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'البريد الإلكتروني':'Email'}</label><input type="email" id="cfg_email" value="${escapeHTML(c.email)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'الموقع الإلكتروني':'Website'}</label><input type="text" id="cfg_website" value="${escapeHTML(c.website)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'العنوان':'Address'}</label><input type="text" id="cfg_address" value="${escapeHTML(c.address)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'ساعات العمل':'Working Hours'}</label><input type="text" id="cfg_workingHours" value="${escapeHTML(c.workingHours)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'العملة':'Currency'}</label><input type="text" id="cfg_currency" value="${escapeHTML(c.currency)}" /></div>
                <div class="form-group"><label>${currentLang==='ar'?'تنسيق التاريخ':'Date Format'}</label>
                    <select id="cfg_dateFormat">
                        <option value="YYYY-MM-DD" ${c.dateFormat==='YYYY-MM-DD'?'selected':''}>YYYY-MM-DD</option>
                        <option value="DD/MM/YYYY" ${c.dateFormat==='DD/MM/YYYY'?'selected':''}>DD/MM/YYYY</option>
                        <option value="MM/DD/YYYY" ${c.dateFormat==='MM/DD/YYYY'?'selected':''}>MM/DD/YYYY</option>
                    </select>
                </div>
                <div class="form-group"><label>${currentLang==='ar'?'تنسيق الوقت':'Time Format'}</label>
                    <select id="cfg_timeFormat">
                        <option value="24h" ${c.timeFormat==='24h'?'selected':''}>24h</option>
                        <option value="12h" ${c.timeFormat==='12h'?'selected':''}>12h</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="settings-section">
            <h3>🖼️ ${currentLang==='ar'?'الشعار / الأيقونة':'Logo / Icon'}</h3>
            <div class="logo-editor">
                <div class="logo-preview-box" id="logoPreviewBox">
                    ${renderLogoPreviewHTML(c.logo)}
                </div>
                <div class="logo-controls">
                    <div class="logo-actions-row">
                        <button type="button" class="btn-primary" id="uploadLogoBtn">📁 ${currentLang==='ar'?'اختر صورة':'Choose Image'}</button>
                        <input type="file" id="logoFileInput" accept="image/png,image/jpeg,image/jpg,image/webp" style="display:none;" />
                        <button type="button" class="btn-secondary" id="resetLogoBtn">↩️ ${currentLang==='ar'?'إعادة الإيموجي':'Reset to Emoji'}</button>
                    </div>
                    <div class="form-group" style="margin-top:10px;">
                        <label>${currentLang==='ar'?'أو استخدم إيموجي':'Or use an emoji'}</label>
                        <input type="text" id="cfg_logoEmoji" value="${!logoIsImage ? escapeHTML(c.logo) : '🦷'}" maxlength="8" placeholder="🦷" />
                    </div>
                    <div class="form-group">
                        <label>${currentLang==='ar'?'أو رابط صورة (URL)':'Or image URL'}</label>
                        <input type="text" id="cfg_logoUrl" value="${logoIsImage && !String(c.logo).startsWith('data:') ? escapeHTML(c.logo) : ''}" placeholder="https://example.com/logo.png" />
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn-secondary" id="applyLogoUrlBtn">🔗 ${currentLang==='ar'?'تطبيق الرابط':'Apply URL'}</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-actions">
            <button class="btn-primary" id="saveClinicInfoBtn">${t('common.save')}</button>
        </div>
    `;
}

/* ============================================================
   31) SETTINGS — Branding
   ============================================================ */
function renderBrandingSettings() {
    const b = state.data.config.branding;
    return `
        <div class="settings-section">
            <h3>🎨 ${currentLang==='ar'?'الهوية البصرية':'Branding'}</h3>
            <div class="settings-grid">
                <div class="setting-row"><label>${currentLang==='ar'?'اللون الأساسي':'Primary Color'}</label>
                    <div class="color-picker-row"><input type="color" id="cfg_primary" value="${b.primary}" /><input type="text" id="cfg_primary_text" value="${b.primary}" style="width:90px;" /></div>
                </div>
                <div class="setting-row"><label>${currentLang==='ar'?'اللون الثانوي':'Secondary Color'}</label>
                    <div class="color-picker-row"><input type="color" id="cfg_secondary" value="${b.secondary}" /><input type="text" id="cfg_secondary_text" value="${b.secondary}" style="width:90px;" /></div>
                </div>
                <div class="setting-row"><label>${currentLang==='ar'?'اللون المميز':'Accent Color'}</label>
                    <div class="color-picker-row"><input type="color" id="cfg_accent" value="${b.accent}" /><input type="text" id="cfg_accent_text" value="${b.accent}" style="width:90px;" /></div>
                </div>
            </div>
            <div class="modal-actions">
                <button class="btn-primary" id="saveBrandingBtn">${t('common.save')}</button>
                <button class="btn-secondary" id="resetBrandingBtn">${currentLang==='ar'?'إعادة تعيين':'Reset'}</button>
            </div>
        </div>
    `;
}

/* ============================================================
   32) SETTINGS — Departments
   ============================================================ */
function renderDepartmentsSettings() {
    const deps = [...state.data.config.departments].sort((a,b)=>(a.order||0)-(b.order||0));
    return `
        <div class="settings-section">
            <h3>🧩 ${currentLang==='ar'?'الأقسام':'Departments'}</h3>
            <div class="list-editor" id="departmentsList">
                ${deps.map((d, i) => {
                    const itemsCount = getDeptItemsCount(d);
                    const builtInLabel = d.builtIn ? ` <span style="font-size:10px;background:var(--primary-light);color:var(--primary);padding:1px 6px;border-radius:8px;">${currentLang==='ar'?'أساسي':'built-in'}</span>` : '';
                    return `
                    <div class="list-editor-item ${d.enabled === false ? 'disabled' : ''}" data-id="${escapeHTML(d.id)}">
                        <span class="li-grip"><i class="fas ${escapeHTML(d.icon||'fa-circle')}" style="color:var(--primary);"></i></span>
                        <div class="li-info">
                            <div class="li-title">${escapeHTML(currentLang==='ar'?d.nameAr:d.nameEn||d.nameAr)} ${builtInLabel} ${d.enabled === false ? `(${t('common.disable')})` : ''}</div>
                            <div class="li-sub">
                                ${d.entityType === 'patient' ? (currentLang==='ar'?'مرضى':'Patients') : (currentLang==='ar'?'عملاء':'Clients')}
                                — ${itemsCount} ${currentLang==='ar'?'عنصر':'items'}
                            </div>
                        </div>
                        <div class="li-actions">
                            <button data-dep-action="up" data-idx="${i}" title="Up">▲</button>
                            <button data-dep-action="down" data-idx="${i}" title="Down">▼</button>
                            ${!d.builtIn ? `<button data-dep-action="edit" data-id="${escapeHTML(d.id)}">${t('common.edit')}</button>` : ''}
                            <button data-dep-action="${d.enabled === false ? 'enable' : 'disable'}" data-id="${escapeHTML(d.id)}">${d.enabled === false ? t('common.enable') : t('common.disable')}</button>
                            ${!d.builtIn ? `<button data-dep-action="delete" data-id="${escapeHTML(d.id)}">${t('common.delete')}</button>` : ''}
                        </div>
                    </div>
                `}).join('')}
            </div>
            <div class="modal-actions">
                <button class="btn-primary" id="addDepartmentBtn">+ ${currentLang==='ar'?'إضافة قسم جديد':'Add New Department'}</button>
            </div>
        </div>
    `;
}

function getDeptItemsCount(dept) {
    if (dept.id === 'dental') return state.data.patients.length;
    if (dept.id === 'beauty') return state.data.beauty.length;
    if (dept.id === 'rental') return state.data.rentals.length;
    const dd = state.data.departmentsData[dept.id];
    return dd ? (dd.items || []).length : 0;
}

/* ============================================================
   33) SETTINGS — Clinics
   ============================================================ */
function renderClinicsSettings() {
    const cls = [...state.data.config.clinics].sort((a,b)=>(a.order||0)-(b.order||0));
    return `
        <div class="settings-section">
            <h3>🏢 ${currentLang==='ar'?'العيادات / الغرف':'Clinics / Rooms'}</h3>
            <div class="list-editor" id="clinicsList">
                ${cls.map((c, i) => `
                    <div class="list-editor-item ${c.status === 'disabled' ? 'disabled' : ''}" data-id="${escapeHTML(c.id)}">
                        <span class="li-grip" style="color:${escapeHTML(c.color||'var(--text-light)')}">●</span>
                        <div class="li-info">
                            <div class="li-title">${escapeHTML(c.name)} ${c.status==='disabled'?`(${t('common.disable')})`:''}</div>
                            <div class="li-sub">${escapeHTML(c.type||'-')} — ${escapeHTML(c.code||'')} ${c.doctor?' — '+escapeHTML(c.doctor):''}</div>
                        </div>
                        <div class="li-actions">
                            <button data-clinic-action="up" data-idx="${i}">▲</button>
                            <button data-clinic-action="down" data-idx="${i}">▼</button>
                            <button data-clinic-action="edit" data-id="${escapeHTML(c.id)}">${t('common.edit')}</button>
                            <button data-clinic-action="${c.status==='disabled'?'enable':'disable'}" data-id="${escapeHTML(c.id)}">${c.status==='disabled'?t('common.enable'):t('common.disable')}</button>
                            <button data-clinic-action="delete" data-id="${escapeHTML(c.id)}">${t('common.delete')}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="modal-actions"><button class="btn-primary" id="addClinicBtn">+ ${currentLang==='ar'?'إضافة عيادة':'Add Clinic'}</button></div>
        </div>
    `;
}

/* ============================================================
   34) SETTINGS — Services
   ============================================================ */
function renderServicesSettings() {
    const svc = [...state.data.config.services].sort((a,b)=>(a.order||0)-(b.order||0));
    return `
        <div class="settings-section">
            <h3>💰 ${currentLang==='ar'?'الخدمات':'Services'}</h3>
            <div class="list-editor" id="servicesList">
                ${svc.length ? svc.map((s, i) => {
                    const dept = state.data.config.departments.find(d => d.id === s.department);
                    const deptName = dept ? (currentLang==='ar'?dept.nameAr:dept.nameEn||dept.nameAr) : '-';
                    return `
                    <div class="list-editor-item ${s.enabled===false?'disabled':''}" data-id="${escapeHTML(s.id)}">
                        <span class="li-grip">💰</span>
                        <div class="li-info">
                            <div class="li-title">${escapeHTML(currentLang==='ar'?s.nameAr:s.nameEn||s.nameAr)} — ${formatCurrency(s.price)}</div>
                            <div class="li-sub">${escapeHTML(deptName)} ${s.duration ? '— '+safeNumber(s.duration)+'m' : ''}</div>
                        </div>
                        <div class="li-actions">
                            <button data-service-action="up" data-idx="${i}">▲</button>
                            <button data-service-action="down" data-idx="${i}">▼</button>
                            <button data-service-action="edit" data-id="${escapeHTML(s.id)}">${t('common.edit')}</button>
                            <button data-service-action="delete" data-id="${escapeHTML(s.id)}">${t('common.delete')}</button>
                        </div>
                    </div>
                `}).join('') : `<div style="color:var(--text-light);padding:16px;text-align:center;">
                    <p style="margin-bottom:8px;">${currentLang==='ar'?'لا توجد خدمات بعد.':'No services yet.'}</p>
                </div>`}
            </div>
            <div class="modal-actions">
                <button class="btn-primary" id="addServiceBtn">+ ${currentLang==='ar'?'إضافة خدمة':'Add Service'}</button>
            </div>
        </div>
    `;
}

/* ============================================================
   35) SETTINGS — Rental Pricing
   ============================================================ */
function renderRentalPricingSettings() {
    const clinics = [...state.data.config.clinics].sort((a,b)=>(a.order||0)-(b.order||0));
    if (!clinics.length) {
        return `<div class="settings-section">
            <h3>${t('rentalPricing.title')}</h3>
            <p style="text-align:center;padding:20px;color:var(--text-light);">${t('rentalPricing.noClinics')}</p>
        </div>`;
    }

    return `
        <div class="settings-section">
            <h3>${t('rentalPricing.title')}</h3>
            <p class="muted-sm" style="margin-bottom:16px;">${t('rentalPricing.desc')}</p>

            <div class="rental-pricing-list">
                ${clinics.map((c) => {
                    const p = normalizePricing(c.pricing);
                    const isRange = p.shiftMode === 'range';
                    return `
                    <div class="rental-pricing-card" data-clinic-id="${escapeHTML(c.id)}">
                        <div class="rental-pricing-head">
                            <span class="dot" style="background:${escapeHTML(c.color||'var(--primary)')}"></span>
                            <strong>${escapeHTML(c.name)}</strong>
                            <span class="muted-sm">(${escapeHTML(c.code||'')})</span>
                        </div>

                        <div class="rental-pricing-grid">
                            <div class="form-group">
                                <label>${t('rentalPricing.pricePerHour')}</label>
                                <input type="number" min="0" step="0.01" data-price-field="pricePerHour" value="${safeNumber(p.pricePerHour)}" />
                            </div>
                            <div class="form-group">
                                <label>${t('rentalPricing.shiftPrice')}</label>
                                <input type="number" min="0" step="0.01" data-price-field="shiftPrice" value="${safeNumber(p.shiftPrice)}" />
                            </div>
                        </div>

                        <div class="form-group" style="margin-top:12px;">
                            <label>${t('rentalPricing.shiftMode')}</label>
                            <div class="shift-mode-row">
                                <label class="shift-mode-card ${isRange?'active':''}">
                                    <input type="radio" name="shiftMode_${escapeHTML(c.id)}" value="range" data-shift-mode ${isRange?'checked':''} />
                                    <span>📏 ${t('rentalPricing.shiftMode.range')}</span>
                                </label>
                                <label class="shift-mode-card ${!isRange?'active':''}">
                                    <input type="radio" name="shiftMode_${escapeHTML(c.id)}" value="hours" data-shift-mode ${!isRange?'checked':''} />
                                    <span>⏱️ ${t('rentalPricing.shiftMode.hours')}</span>
                                </label>
                            </div>
                        </div>

                        <div class="rental-pricing-grid shift-range-fields" style="display:${isRange?'grid':'none'};">
                            <div class="form-group">
                                <label>${t('rentalPricing.shiftMinHours')}</label>
                                <input type="number" min="0" step="0.5" data-price-field="shiftMinHours" value="${safeNumber(p.shiftMinHours)}" />
                            </div>
                            <div class="form-group">
                                <label>${t('rentalPricing.shiftMaxHours')}</label>
                                <input type="number" min="0" step="0.5" data-price-field="shiftMaxHours" value="${safeNumber(p.shiftMaxHours)}" />
                            </div>
                        </div>

                        <div class="rental-pricing-grid shift-hours-fields" style="display:${!isRange?'grid':'none'};">
                            <div class="form-group">
                                <label>${t('rentalPricing.shiftHours')}</label>
                                <input type="number" min="0" step="0.5" data-price-field="shiftHours" value="${safeNumber(p.shiftHours)}" />
                            </div>
                        </div>

                        <div class="rental-pricing-grid" style="margin-top:12px;">
                            <div class="form-group">
                                <label>${t('rentalPricing.extraHourPrice')}</label>
                                <input type="number" min="0" step="0.01" data-price-field="extraHourPrice" value="${safeNumber(p.extraHourPrice)}" />
                            </div>
                            <div class="form-group">
                                <label>${t('rentalPricing.fullDayPrice')}</label>
                                <input type="number" min="0" step="0.01" data-price-field="fullDayPrice" value="${safeNumber(p.fullDayPrice)}" />
                            </div>
                            <div class="form-group">
                                <label>${t('rentalPricing.fullDayHours')}</label>
                                <input type="number" min="0" step="0.5" data-price-field="fullDayHours" value="${safeNumber(p.fullDayHours)}" />
                            </div>
                        </div>
                    </div>
                `;
                }).join('')}
            </div>

            <div class="modal-actions">
                <button class="btn-primary" id="saveRentalPricingBtn">${t('rentalPricing.saveAll')}</button>
            </div>
        </div>
    `;
}

/* ============================================================
   36) SETTINGS — Users
   ============================================================ */
function renderUsersSettings() {
    const users = state.data.config.users || [];
    return `
        <div class="settings-section">
            <h3>👥 ${currentLang==='ar'?'المستخدمون':'Users'}</h3>
            <div class="list-editor" id="usersList">
                ${users.map(u => {
                    const permsCount = u.isAdmin ? (currentLang==='ar'?'كل الصلاحيات':'All permissions') :
                        Object.values(u.permissions || {}).filter(p => p.view || p.create || p.edit || p.delete).length + ' ' + (currentLang==='ar'?'صفحة':'pages');
                    return `
                    <div class="list-editor-item ${u.active===false?'disabled':''}" data-id="${escapeHTML(u.id)}">
                        <span class="li-grip">${u.isAdmin ? '👑' : '👤'}</span>
                        <div class="li-info">
                            <div class="li-title">
                                ${escapeHTML(u.displayName || u.username)}
                                ${u.isAdmin ? `<span style="font-size:10px;background:var(--warning);color:#fff;padding:1px 6px;border-radius:8px;margin-inline-start:6px;">${currentLang==='ar'?'مدير':'Admin'}</span>` : ''}
                                ${u.active === false ? `<span style="font-size:10px;background:var(--danger);color:#fff;padding:1px 6px;border-radius:8px;margin-inline-start:6px;">${currentLang==='ar'?'معطّل':'Disabled'}</span>` : ''}
                            </div>
                            <div class="li-sub">@${escapeHTML(u.username)} — ${permsCount}</div>
                        </div>
                        <div class="li-actions">
                            <button data-user-action="edit" data-id="${escapeHTML(u.id)}">${t('common.edit')}</button>
                            ${!u.isAdmin ? `<button data-user-action="delete" data-id="${escapeHTML(u.id)}">${t('common.delete')}</button>` : ''}
                        </div>
                    </div>
                `}).join('')}
            </div>
            <div class="modal-actions">
                <button class="btn-primary" id="addUserBtn">+ ${currentLang==='ar'?'إضافة مستخدم':'Add User'}</button>
            </div>
        </div>
    `;
}

/* ============================================================
   37) SETTINGS — System
   ============================================================ */
function renderSystemSettings() {
    return `
        <div class="settings-section">
            <h3>🛠️ ${currentLang==='ar'?'النظام':'System'}</h3>
            <div class="setting-row"><label>${currentLang==='ar'?'الوضع الداكن':'Dark Mode'}</label>
                <input type="checkbox" id="darkModeCheck" ${document.body.classList.contains('dark') ? 'checked' : ''} />
            </div>
            <div class="setting-row"><label>${currentLang==='ar'?'اللغة':'Language'}</label>
                <select id="langSelect">
                    <option value="ar" ${currentLang==='ar'?'selected':''}>العربية</option>
                    <option value="en" ${currentLang==='en'?'selected':''}>English</option>
                </select>
            </div>
            <div class="setting-row"><label>${currentLang==='ar'?'إصدار قاعدة البيانات':'Schema Version'}</label>
                <span>v${state.data.schemaVersion}</span>
            </div>
            <div class="setting-row"><label>${currentLang==='ar'?'تعديل بيانات الدخول':'Edit Credentials'}</label>
                <button class="btn-primary" id="openLoginSettingsBtn2">${t('common.edit')}</button>
            </div>
            <div class="setting-row"><label>${currentLang==='ar'?'النسخة الاحتياطية قبل الترحيل':'Pre-migration Backup'}</label>
                <button class="btn-secondary" id="downloadPreMigrationBtn">${t('common.export')}</button>
            </div>
            ${state.currentUser?.isAdmin ? `
            <div class="setting-row"><label style="color:var(--danger);">${currentLang==='ar'?'حذف جميع البيانات':'Delete All Data'}</label>
                <button class="btn-danger" id="clearAllBtn">${t('common.delete')}</button>
            </div>
            ` : ''}
        </div>
    `;
}

/* ============================================================
   38) SETTINGS — Event Binding
   ============================================================ */
function bindSettingsActions() {
    $('uploadLogoBtn')?.addEventListener('click', () => $('logoFileInput')?.click());
    $('logoFileInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) handleLogoUpload(file);
        e.target.value = '';
    });
    $('resetLogoBtn')?.addEventListener('click', () => {
        state.data.config.clinicInfo.logo = '🦷';
        saveData();
        applyBranding();
        renderSettingsTab('clinic');
        showToast(t('toast.saved'), 'success');
    });
    $('applyLogoUrlBtn')?.addEventListener('click', () => {
        const url = $('cfg_logoUrl')?.value.trim();
        if (!url) { showToast('⚠️ Enter URL', 'warning'); return; }
        if (!/^https?:\/\//i.test(url)) { showToast('⚠️ URL must start with http/https', 'error'); return; }
        state.data.config.clinicInfo.logo = url;
        saveData();
        applyBranding();
        const box = $('logoPreviewBox');
        if (box) box.innerHTML = renderLogoPreviewHTML(url);
        showToast(t('toast.saved'), 'success');
    });

    $('saveClinicInfoBtn')?.addEventListener('click', () => {
        const c = state.data.config.clinicInfo;
        c.nameAr = $('cfg_nameAr').value.trim();
        c.nameEn = $('cfg_nameEn').value.trim();
        c.tagline = $('cfg_tagline').value.trim();
        const emojiVal = $('cfg_logoEmoji')?.value.trim();
        const urlVal = $('cfg_logoUrl')?.value.trim();
        const currentLogo = c.logo;
        if (urlVal && /^https?:\/\//i.test(urlVal)) c.logo = urlVal;
        else if (emojiVal) c.logo = emojiVal;
        else if (!currentLogo) c.logo = '🦷';
        c.phone = $('cfg_phone').value.trim();
        c.whatsapp = $('cfg_whatsapp').value.trim();
        c.email = $('cfg_email').value.trim();
        c.website = $('cfg_website').value.trim();
        c.address = $('cfg_address').value.trim();
        c.workingHours = $('cfg_workingHours').value.trim();
        c.currency = $('cfg_currency').value.trim() || DEFAULT_CURRENCY;
        c.dateFormat = $('cfg_dateFormat').value;
        c.timeFormat = $('cfg_timeFormat').value;
        saveData();
        applyBranding();
        renderAll();
        showToast(t('toast.saved'), 'success');
    });

    const bindColor = (pickerId, textId) => {
        $(pickerId)?.addEventListener('input', () => { const el = $(textId); if (el) el.value = $(pickerId).value; });
        $(textId)?.addEventListener('input', () => { const el = $(pickerId); if (el) el.value = $(textId).value; });
    };
    bindColor('cfg_primary', 'cfg_primary_text');
    bindColor('cfg_secondary', 'cfg_secondary_text');
    bindColor('cfg_accent', 'cfg_accent_text');
    $('saveBrandingBtn')?.addEventListener('click', () => {
        const b = state.data.config.branding;
        b.primary = $('cfg_primary').value;
        b.secondary = $('cfg_secondary').value;
        b.accent = $('cfg_accent').value;
        saveData();
        applyBranding();
        showToast(t('toast.saved'), 'success');
    });
    $('resetBrandingBtn')?.addEventListener('click', () => {
        state.data.config.branding = { ...defaultData().config.branding };
        saveData();
        applyBranding();
        renderSettingsTab('branding');
        showToast(t('toast.saved'), 'success');
    });

    $('addDepartmentBtn')?.addEventListener('click', () => openDepartmentModal(null));
    $$('#departmentsList [data-dep-action]').forEach(b => {
        b.addEventListener('click', () => {
            handleDepartmentAction(b.getAttribute('data-dep-action'), b.getAttribute('data-id'), b.getAttribute('data-idx'));
        });
    });

    $('addClinicBtn')?.addEventListener('click', addClinic);
    $$('#clinicsList [data-clinic-action]').forEach(b => {
        b.addEventListener('click', () => {
            handleClinicAction(b.getAttribute('data-clinic-action'), b.getAttribute('data-id'), b.getAttribute('data-idx'));
        });
    });

    $('addServiceBtn')?.addEventListener('click', () => openServiceModal(null));
    $$('#servicesList [data-service-action]').forEach(b => {
        b.addEventListener('click', () => {
            handleServiceAction(b.getAttribute('data-service-action'), b.getAttribute('data-id'), b.getAttribute('data-idx'));
        });
    });

    $$('.rental-pricing-card').forEach(card => {
        const radios = card.querySelectorAll('input[data-shift-mode]');
        const rangeFields = card.querySelector('.shift-range-fields');
        const hoursFields = card.querySelector('.shift-hours-fields');
        const modeCards = card.querySelectorAll('.shift-mode-card');

        radios.forEach(r => {
            r.addEventListener('change', () => {
                const mode = card.querySelector('input[data-shift-mode]:checked')?.value || 'range';
                if (rangeFields) rangeFields.style.display = mode === 'range' ? 'grid' : 'none';
                if (hoursFields) hoursFields.style.display = mode === 'hours' ? 'grid' : 'none';
                modeCards.forEach(mc => {
                    const input = mc.querySelector('input[data-shift-mode]');
                    mc.classList.toggle('active', input && input.checked);
                });
            });
        });
    });

    $('saveRentalPricingBtn')?.addEventListener('click', saveAllRentalPricing);

    $('addUserBtn')?.addEventListener('click', () => openUserModal(null));
    $$('#usersList [data-user-action]').forEach(b => {
        b.addEventListener('click', () => {
            handleUserAction(b.getAttribute('data-user-action'), b.getAttribute('data-id'));
        });
    });

    $('darkModeCheck')?.addEventListener('change', toggleTheme);
    $('langSelect')?.addEventListener('change', e => setLanguage(e.target.value));
    $('openLoginSettingsBtn2')?.addEventListener('click', openLoginSettings);
    $('downloadPreMigrationBtn')?.addEventListener('click', () => {
        const raw = localStorage.getItem(STORAGE_KEYS.preMigration);
        if (!raw) { showToast(currentLang==='ar'?'لا توجد نسخة':'No backup', 'info'); return; }
        const blob = new Blob([raw], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `pre-migration-${todayStr()}.json`;
        a.click(); URL.revokeObjectURL(url);
    });
    $('clearAllBtn')?.addEventListener('click', () => {
        showConfirmDialog(
            currentLang==='ar' ? '⚠️ حذف جميع البيانات نهائياً؟' : '⚠️ Permanently delete all data?',
            () => {
                const users = state.data.config.users;
                state.data = defaultData();
                state.data.config.users = users;
                saveData();
                applyBranding();
                renderSidebar();
                renderAll();
                renderSettingsTab('system');
                showToast(t('toast.deleted'), 'warning');
            }
        );
    });
}

function saveAllRentalPricing() {
    const cards = document.querySelectorAll('.rental-pricing-card');
    cards.forEach(card => {
        const clinicId = card.getAttribute('data-clinic-id');
        const clinic = state.data.config.clinics.find(c => c.id === clinicId);
        if (!clinic) return;

        const newPricing = Object.assign({}, defaultClinicPricing());
        card.querySelectorAll('[data-price-field]').forEach(inp => {
            const field = inp.getAttribute('data-price-field');
            newPricing[field] = safeNumber(inp.value);
        });
        const checkedMode = card.querySelector('input[data-shift-mode]:checked');
        newPricing.shiftMode = checkedMode ? checkedMode.value : 'range';

        clinic.pricing = newPricing;
    });
    saveData();
    showToast(t('rentalPricing.saved'), 'success');
    addActivity('تعديل أسعار الإيجار', '');
}

/* ============================================================
   39) DEPARTMENT ACTIONS
   ============================================================ */
function openDepartmentModal(dept) {
    const isEdit = !!dept;
    $('addDeptTitle').textContent = isEdit
        ? (currentLang==='ar'?'✏️ تعديل القسم':'✏️ Edit Department')
        : (currentLang==='ar'?'🧩 إضافة قسم جديد':'🧩 Add New Department');
    $('deptEditId').value = dept?.id || '';
    $('dept_nameAr').value = dept?.nameAr || '';
    $('dept_nameEn').value = dept?.nameEn || '';
    $('dept_enabled').value = (dept?.enabled === false) ? 'false' : 'true';

    const entityType = dept?.entityType || 'patient';
    document.querySelectorAll('input[name="dept_entityType"]').forEach(r => {
        r.checked = (r.value === entityType);
    });

    state.selectedDeptIcon = dept?.icon || 'fa-stethoscope';
    renderIconGrid();

    openModal('addDepartmentModal');
}

function renderIconGrid() {
    const grid = $('deptIconGrid');
    if (!grid) return;
    grid.innerHTML = DEPARTMENT_ICONS.map(icon => `
        <div class="icon-grid-item ${icon === state.selectedDeptIcon ? 'selected' : ''}" data-icon="${icon}">
            <i class="fas ${icon}"></i>
        </div>
    `).join('');
    grid.querySelectorAll('.icon-grid-item').forEach(el => {
        el.addEventListener('click', () => {
            state.selectedDeptIcon = el.getAttribute('data-icon');
            $('dept_icon').value = state.selectedDeptIcon;
            grid.querySelectorAll('.icon-grid-item').forEach(x => x.classList.remove('selected'));
            el.classList.add('selected');
        });
    });
}

function saveDepartment(e) {
    e.preventDefault();
    const editId = $('deptEditId').value;
    const nameAr = $('dept_nameAr').value.trim();
    const nameEn = $('dept_nameEn').value.trim();
    const icon = state.selectedDeptIcon || 'fa-stethoscope';
    const entityType = document.querySelector('input[name="dept_entityType"]:checked')?.value || 'patient';
    const enabled = $('dept_enabled').value === 'true';

    if (!nameAr) { showToast(t('toast.requiredFields'), 'error'); return; }

    if (editId) {
        const dept = state.data.config.departments.find(d => d.id === editId);
        if (!dept) return;
        dept.nameAr = nameAr;
        dept.nameEn = nameEn || nameAr;
        dept.icon = icon;
        dept.entityType = entityType;
        dept.enabled = enabled;
        addActivity('تعديل قسم', nameAr);
    } else {
        const id = 'dept_' + generateId();
        const order = (state.data.config.departments.reduce((m,d)=>Math.max(m,d.order||0),0)) + 1;
        state.data.config.departments.push({
            id, nameAr, nameEn: nameEn || nameAr, icon, pageId: id, enabled, order, builtIn: false, entityType
        });
        state.data.departmentsData[id] = { entityType, items: [] };
        addActivity('إضافة قسم', nameAr);
    }

    saveData();
    renderSidebar();
    renderSettingsTab('departments');
    renderDynamicPages();
    closeModalById('addDepartmentModal');
    showToast(t('toast.saved'), 'success');
}

function handleDepartmentAction(action, id, idx) {
    const arr = state.data.config.departments;
    const i = arr.findIndex(d => d.id === id);
    if (i === -1) return;
    if (action === 'up' && i > 0) {
        const tmp = arr[i-1].order; arr[i-1].order = arr[i].order; arr[i].order = tmp;
    } else if (action === 'down' && i < arr.length-1) {
        const tmp = arr[i+1].order; arr[i+1].order = arr[i].order; arr[i].order = tmp;
    } else if (action === 'edit') {
        if (arr[i].builtIn) { showToast('⚠️ Built-in', 'warning'); return; }
        openDepartmentModal(arr[i]); return;
    } else if (action === 'disable') arr[i].enabled = false;
    else if (action === 'enable') arr[i].enabled = true;
    else if (action === 'delete') {
        if (arr[i].builtIn) { showToast('⚠️ Built-in', 'warning'); return; }
        const itemsCount = getDeptItemsCount(arr[i]);
        if (itemsCount > 0) {
            showConfirmDialog(
                currentLang==='ar' ? `⚠️ يحتوي على ${itemsCount} عنصر. حذف الكل؟` : `⚠️ Has ${itemsCount} items. Delete all?`,
                () => {
                    delete state.data.departmentsData[id];
                    arr.splice(i, 1);
                    saveData();
                    renderSidebar();
                    renderSettingsTab('departments');
                    renderDynamicPages();
                    showToast(t('toast.deleted'), 'warning');
                }
            );
            return;
        } else {
            delete state.data.departmentsData[id];
            arr.splice(i, 1);
        }
    }
    saveData();
    renderSidebar();
    renderSettingsTab('departments');
    renderDynamicPages();
}

/* ============================================================
   40) CLINIC ACTIONS
   ============================================================ */
function addClinic() {
    const name = prompt(currentLang==='ar'?'اسم العيادة:':'Clinic name:');
    if (!name) return;
    const order = (state.data.config.clinics.reduce((m,c)=>Math.max(m,c.order||0),0)) + 1;
    state.data.config.clinics.push({
        id: generateId(), name, type: 'dental', code: 'C' + order,
        doctor: '', status: 'active', color: '#0D9488', hours: '', services: [], order,
        pricing: normalizePricing(state.data.config.rentalPrices)
    });
    saveData();
    renderSettingsTab('clinics');
    showToast(t('toast.saved'), 'success');
}
function handleClinicAction(action, id, idx) {
    const arr = state.data.config.clinics;
    const i = arr.findIndex(c => c.id === id);
    if (i === -1) return;
    if (action === 'up' && i > 0) {
        const tmp = arr[i-1].order; arr[i-1].order = arr[i].order; arr[i].order = tmp;
    } else if (action === 'down' && i < arr.length-1) {
        const tmp = arr[i+1].order; arr[i+1].order = arr[i].order; arr[i].order = tmp;
    } else if (action === 'edit') {
        const c = arr[i];
        const name = prompt(currentLang==='ar'?'اسم العيادة:':'Clinic name:', c.name);
        if (name !== null) c.name = name.trim() || c.name;
        const doctor = prompt(currentLang==='ar'?'اسم الطبيب:':'Doctor:', c.doctor || '');
        if (doctor !== null) c.doctor = doctor.trim();
        const code = prompt(currentLang==='ar'?'الرمز:':'Code:', c.code || '');
        if (code !== null) c.code = code.trim();
        c.pricing = normalizePricing(c.pricing);
    } else if (action === 'disable') arr[i].status = 'disabled';
    else if (action === 'enable') arr[i].status = 'active';
    else if (action === 'delete') {
        showConfirmDialog(currentLang==='ar' ? 'حذف هذه العيادة؟' : 'Delete this clinic?', () => {
            arr.splice(i, 1);
            saveData();
            renderSettingsTab('clinics');
            showToast(t('toast.deleted'), 'warning');
        });
        return;
    }
    saveData();
    renderSettingsTab('clinics');
}

/* ============================================================
   41) SERVICE ACTIONS
   ============================================================ */
function openServiceModal(service) {
    const isEdit = !!service;
    $('serviceModalTitle').textContent = isEdit
        ? (currentLang==='ar'?'✏️ تعديل خدمة':'✏️ Edit Service')
        : (currentLang==='ar'?'💰 إضافة خدمة جديدة':'💰 Add New Service');
    $('svc_editId').value = service?.id || '';
    $('svc_nameAr').value = service?.nameAr || '';
    $('svc_nameEn').value = service?.nameEn || '';
    $('svc_price').value = safeNumber(service?.price);
    $('svc_duration').value = safeNumber(service?.duration);
    $('svc_description').value = service?.description || '';
    $('svc_enabled').value = (service?.enabled === false) ? 'false' : 'true';

    const deptSelect = $('svc_department');
    const deps = state.data.config.departments.sort((a,b)=>(a.order||0)-(b.order||0));
    deptSelect.innerHTML = `<option value="">${currentLang==='ar'?'— بدون قسم —':'— None —'}</option>` +
        deps.map(d => `<option value="${escapeHTML(d.id)}" ${service?.department === d.id ? 'selected' : ''}>${escapeHTML(currentLang==='ar'?d.nameAr:d.nameEn||d.nameAr)}</option>`).join('');

    openModal('serviceModal');
}

function saveService(e) {
    e.preventDefault();
    const editId = $('svc_editId').value;
    const nameAr = $('svc_nameAr').value.trim();
    const nameEn = $('svc_nameEn').value.trim();
    const price = safeNumber($('svc_price').value);
    const duration = safeNumber($('svc_duration').value);
    const department = $('svc_department').value;
    const description = $('svc_description').value.trim();
    const enabled = $('svc_enabled').value === 'true';

    if (!nameAr) { showToast(t('toast.requiredFields'), 'error'); return; }

    if (editId) {
        const svc = state.data.config.services.find(s => s.id === editId);
        if (!svc) return;
        svc.nameAr = nameAr;
        svc.nameEn = nameEn || nameAr;
        svc.price = price;
        svc.duration = duration;
        svc.department = department;
        svc.description = description;
        svc.enabled = enabled;
        addActivity('تعديل خدمة', nameAr);
    } else {
        const order = (state.data.config.services.reduce((m,s)=>Math.max(m,s.order||0),0)) + 1;
        state.data.config.services.push({
            id: generateId(),
            nameAr, nameEn: nameEn || nameAr, price, duration, department, description, enabled, order
        });
        addActivity('إضافة خدمة', nameAr);
    }

    saveData();
    renderSettingsTab('services');
    closeModalById('serviceModal');
    showToast(editId ? t('toast.saved') : t('toast.serviceAdded'), 'success');
}

function handleServiceAction(action, id, idx) {
    const arr = state.data.config.services;
    const i = arr.findIndex(s => s.id === id);
    if (i === -1) return;
    if (action === 'up' && i > 0) {
        const tmp = arr[i-1].order; arr[i-1].order = arr[i].order; arr[i].order = tmp;
        saveData(); renderSettingsTab('services');
    } else if (action === 'down' && i < arr.length-1) {
        const tmp = arr[i+1].order; arr[i+1].order = arr[i].order; arr[i].order = tmp;
        saveData(); renderSettingsTab('services');
    } else if (action === 'edit') {
        openServiceModal(arr[i]);
    } else if (action === 'delete') {
        showConfirmDialog(currentLang==='ar'?'حذف هذه الخدمة؟':'Delete this service?', () => {
            arr.splice(i, 1);
            saveData();
            renderSettingsTab('services');
            showToast(t('toast.deleted'), 'warning');
        });
    }
}

/* ============================================================
   42) USER ACTIONS
   ============================================================ */
function openUserModal(user) {
    const isEdit = !!user;
    $('userModalTitle').textContent = isEdit
        ? (currentLang==='ar'?'✏️ تعديل مستخدم':'✏️ Edit User')
        : (currentLang==='ar'?'👤 إضافة مستخدم جديد':'👤 Add New User');
    $('usr_editId').value = user?.id || '';
    $('usr_username').value = user?.username || '';
    $('usr_displayName').value = user?.displayName || '';
    $('usr_password').value = '';
    $('usr_confirmPassword').value = '';
    $('usr_active').value = (user?.active === false) ? 'false' : 'true';

    const pwdHint = $('usr_pwdHint');
    if (isEdit) {
        pwdHint.textContent = currentLang==='ar' ? 'اترك الحقل فارغاً للإبقاء على كلمة المرور الحالية' : 'Leave blank to keep current password';
        $('usr_password').required = false;
    } else {
        pwdHint.textContent = currentLang==='ar' ? '4 أحرف على الأقل' : 'At least 4 characters';
        $('usr_password').required = true;
    }

    renderPermissionsTable(user?.permissions, user?.isAdmin);
    openModal('userModal');
}

function renderPermissionsTable(permissions, isAdmin) {
    const tbody = $('permissionsTableBody');
    if (!tbody) return;
    const perms = normalizePermissions(permissions);

    tbody.innerHTML = PERMISSION_MODULES.map(m => {
        const p = perms[m.key] || { view:false, create:false, edit:false, delete:false };
        const allChecked = p.view && p.create && p.edit && p.delete;
        const disabled = isAdmin ? 'disabled' : '';
        const label = currentLang==='ar' ? m.labelAr : m.labelEn;
        return `
            <tr data-module="${m.key}">
                <td>${escapeHTML(label)}</td>
                <td><input type="checkbox" data-perm="view" ${p.view?'checked':''} ${disabled} /></td>
                <td><input type="checkbox" data-perm="create" ${p.create?'checked':''} ${disabled} /></td>
                <td><input type="checkbox" data-perm="edit" ${p.edit?'checked':''} ${disabled} /></td>
                <td><input type="checkbox" data-perm="delete" ${p.delete?'checked':''} ${disabled} /></td>
                <td><input type="checkbox" data-perm="all" ${allChecked?'checked':''} ${disabled} /></td>
            </tr>
        `;
    }).join('');

    tbody.querySelectorAll('tr').forEach(tr => {
        const allCb = tr.querySelector('[data-perm="all"]');
        const individualCbs = tr.querySelectorAll('[data-perm="view"], [data-perm="create"], [data-perm="edit"], [data-perm="delete"]');
        allCb?.addEventListener('change', () => {
            individualCbs.forEach(cb => cb.checked = allCb.checked);
        });
        individualCbs.forEach(cb => {
            cb.addEventListener('change', () => {
                allCb.checked = Array.from(individualCbs).every(x => x.checked);
            });
        });
    });
}

function collectPermissionsFromTable() {
    const perms = emptyPermissions();
    const tbody = $('permissionsTableBody');
    if (!tbody) return perms;
    tbody.querySelectorAll('tr').forEach(tr => {
        const modKey = tr.getAttribute('data-module');
        if (!perms[modKey]) return;
        perms[modKey] = {
            view: !!tr.querySelector('[data-perm="view"]')?.checked,
            create: !!tr.querySelector('[data-perm="create"]')?.checked,
            edit: !!tr.querySelector('[data-perm="edit"]')?.checked,
            delete: !!tr.querySelector('[data-perm="delete"]')?.checked
        };
    });
    return perms;
}

function saveUser(e) {
    e.preventDefault();
    const editId = $('usr_editId').value;
    const username = $('usr_username').value.trim();
    const displayName = $('usr_displayName').value.trim();
    const password = $('usr_password').value;
    const confirmPassword = $('usr_confirmPassword').value;
    const active = $('usr_active').value === 'true';
    const permissions = collectPermissionsFromTable();

    if (!username || !displayName) { showToast(t('toast.requiredFields'), 'error'); return; }

    const duplicate = state.data.config.users.some(u => u.username === username && u.id !== editId);
    if (duplicate) { showToast(t('toast.duplicateUsername'), 'error'); return; }

    if (editId) {
        const user = state.data.config.users.find(u => u.id === editId);
        if (!user) return;
        user.username = username;
        user.displayName = displayName;
        user.active = active;
        user.permissions = permissions;
        if (password) {
            if (password !== confirmPassword) { showToast(t('toast.passwordMismatch'), 'error'); return; }
            if (password.length < 4) { showToast(t('toast.passwordShort'), 'error'); return; }
            user.password = password;
        }
        addActivity('تعديل مستخدم', username);
    } else {
        if (!password) { showToast(t('toast.requiredFields'), 'error'); return; }
        if (password !== confirmPassword) { showToast(t('toast.passwordMismatch'), 'error'); return; }
        if (password.length < 4) { showToast(t('toast.passwordShort'), 'error'); return; }
        state.data.config.users.push({
            id: generateId(), username, password, displayName, active,
            isAdmin: false, permissions
        });
        addActivity('إضافة مستخدم', username);
    }

    saveData();
    renderSettingsTab('users');
    closeModalById('userModal');
    showToast(editId ? t('toast.saved') : t('toast.userAdded'), 'success');
}

function handleUserAction(action, id) {
    const arr = state.data.config.users;
    const i = arr.findIndex(u => u.id === id);
    if (i === -1) return;
    if (action === 'edit') {
        openUserModal(arr[i]);
    } else if (action === 'delete') {
        if (arr[i].username === state.currentUser?.username) {
            showToast(t('toast.cannotDeleteSelf'), 'error'); return;
        }
        if (arr[i].isAdmin) { showToast('⚠️ Cannot delete admin', 'error'); return; }
        showConfirmDialog(
            currentLang==='ar' ? `حذف المستخدم "${arr[i].displayName}"؟` : `Delete user "${arr[i].displayName}"?`,
            () => {
                arr.splice(i, 1);
                saveData();
                renderSettingsTab('users');
                showToast(t('toast.deleted'), 'warning');
            }
        );
    }
}

/* ============================================================
   43) DYNAMIC DEPARTMENT PAGES
   ============================================================ */
function renderDynamicPages() {
    const container = $('dynamicPagesContainer');
    if (!container) return;
    const deps = state.data.config.departments.filter(d => !d.builtIn);
    if (!deps.length) { container.innerHTML = ''; return; }
    container.innerHTML = deps.map(d => renderDynamicPageSection(d)).join('');
    deps.forEach(d => bindDynamicPageEvents(d));
}

function renderDynamicPageSection(dept) {
    if (dept.enabled === false) return '';
    const dd = state.data.departmentsData[dept.id] || { entityType: dept.entityType, items: [] };
    const items = dd.items || [];
    const isPatient = dept.entityType === 'patient';
    const addLabel = currentLang==='ar'
        ? (isPatient ? '+ إضافة مريض' : '+ إضافة عميل')
        : (isPatient ? '+ Add Patient' : '+ Add Client');

    return `
        <section id="page-dept-${dept.id}" class="page">
            <div class="page-title">
                <h2><i class="fas ${escapeHTML(dept.icon||'fa-stethoscope')}"></i> ${escapeHTML(currentLang==='ar'?dept.nameAr:dept.nameEn||dept.nameAr)}</h2>
                <button class="btn-primary" data-add-dept-item="${escapeHTML(dept.id)}">${addLabel}</button>
            </div>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>${t('table.name')}</th>
                            <th>${t('table.phone')}</th>
                            <th>${t('table.age')}</th>
                            <th>${t('table.total')}</th>
                            <th>${t('table.paid')}</th>
                            <th>${t('table.remaining')}</th>
                            <th>${t('table.actions')}</th>
                        </tr>
                    </thead>
                    <tbody data-tbody-dept="${escapeHTML(dept.id)}">
                        ${items.length ? items.map((it, idx) => `
                            <tr>
                                <td>${idx + 1}</td>
                                <td><strong>${escapeHTML(it.name || '')}</strong></td>
                                <td>${escapeHTML(it.phone || '')}</td>
                                <td>${safeNumber(it.age)}</td>
                                <td>${formatCurrency(it.totalAmount)}</td>
                                <td>${formatCurrency(it.paidAmount)}</td>
                                <td style="color:${safeNumber(it.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(it.remaining)}</td>
                                <td>
                                    <button class="btn-view" data-action="open-dyn" data-id="${escapeHTML(it.id)}" data-dept="${escapeHTML(dept.id)}">📂</button>
                                    <button class="btn-edit" data-action="edit-dyn" data-id="${escapeHTML(it.id)}" data-dept="${escapeHTML(dept.id)}">✏️</button>
                                    <button class="btn-delete" data-action="delete-dyn" data-id="${escapeHTML(it.id)}" data-dept="${escapeHTML(dept.id)}">🗑️</button>
                                </td>
                            </tr>
                        `).join('') : `<tr><td colspan="8" style="text-align:center;padding:30px;color:var(--text-light);">${t('common.none')}</td></tr>`}
                    </tbody>
                </table>
            </div>
        </section>
    `;
}

function bindDynamicPageEvents(dept) {
    const addBtn = document.querySelector(`[data-add-dept-item="${dept.id}"]`);
    addBtn?.addEventListener('click', () => openDynamicItemForm(dept.id, null));

    const tbody = document.querySelector(`[data-tbody-dept="${dept.id}"]`);
    if (!tbody) return;
    tbody.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            const itemId = btn.getAttribute('data-id');
            const deptId = btn.getAttribute('data-dept');
            if (action === 'open-dyn') openDynamicItemFile(deptId, itemId);
            else if (action === 'edit-dyn') openDynamicItemForm(deptId, itemId);
            else if (action === 'delete-dyn') deleteDynamicItem(deptId, itemId);
        });
    });
}

function renderDynamicPage(deptId) {
    const el = document.getElementById('page-dept-' + deptId);
    if (!el) renderDynamicPages();
}

/* ============================================================
   44) DYNAMIC ITEM FORM
   ============================================================ */
function openDynamicItemForm(deptId, itemId) {
    const dept = state.data.config.departments.find(d => d.id === deptId);
    if (!dept) return;
    const dd = state.data.departmentsData[deptId] || (state.data.departmentsData[deptId] = { entityType: dept.entityType, items: [] });
    const existing = itemId ? (dd.items || []).find(x => x.id === itemId) : null;
    const isEdit = !!existing;

    const isPatient = dept.entityType === 'patient';
    const entityWord = currentLang==='ar'
        ? (isPatient ? 'مريض' : 'عميل')
        : (isPatient ? 'Patient' : 'Client');

    const titleEl = $('patientFormTitle');
    if (titleEl) titleEl.textContent = isEdit
        ? (currentLang==='ar'?'تعديل ':'Edit ') + entityWord
        : (currentLang==='ar'?'إضافة ':'Add ') + entityWord + (currentLang==='ar'?' جديد':' New');

    const p = existing || {};
    const today = todayStr();

    const fields = $('patientFormFields');
    if (!fields) return;

    state.editingPatientId = existing?.id || null;
    state.currentDynamicDept = deptId;

    /* ⭐ الحقول مع oninput/onchange للسن وتاريخ الميلاد */
    fields.innerHTML = `
        <div class="form-group"><label>${currentLang==='ar'?'الاسم الكامل':'Full Name'} <span class="required">*</span></label><input type="text" id="p_name" value="${escapeHTML(p.name||'')}" required /></div>
        <div class="form-group"><label>${currentLang==='ar'?'رقم الهاتف':'Phone'} <span class="required">*</span></label><input type="text" id="p_phone" value="${escapeHTML(p.phone||'')}" required /></div>
        <div class="form-row-2">
            <div class="form-group">
                <label>${currentLang==='ar'?'العمر':'Age'}</label>
                <input type="number" id="p_age" value="${safeNumber(p.age)||''}" min="0" max="150" oninput="updateAgeFromYears()" />
            </div>
            <div class="form-group">
                <label>${currentLang==='ar'?'تاريخ الميلاد':'Birth Date'}</label>
                <input type="date" id="p_birthDate" value="${escapeHTML(p.birthDate||'')}" max="${today}" onchange="updateAgeFromBirth()" />
            </div>
        </div>
        <div class="form-group"><label>${currentLang==='ar'?'الجنس':'Gender'}</label>
            <select id="p_gender">
                <option value="ذكر" ${p.gender==='ذكر'?'selected':''}>${currentLang==='ar'?'ذكر':'Male'}</option>
                <option value="أنثى" ${p.gender==='أنثى'?'selected':''}>${currentLang==='ar'?'أنثى':'Female'}</option>
            </select>
        </div>
        <div class="form-row-2">
            <div class="form-group"><label>${t('table.total')}</label><input type="number" id="p_total" value="${safeNumber(p.totalAmount)}" min="0" step="0.01" oninput="updateRemaining()" /></div>
            <div class="form-group"><label>${t('table.paid')}</label><input type="number" id="p_paid" value="${safeNumber(p.paidAmount)}" min="0" step="0.01" oninput="updateRemaining()" /></div>
        </div>
        <div class="form-group"><label>${t('table.remaining')}</label><input type="number" id="p_remaining" value="${safeNumber(p.remaining)}" readonly /></div>
        <div class="form-group"><label>${currentLang==='ar'?'ملاحظات':'Notes'}</label><input type="text" id="p_notes" value="${escapeHTML(p.notes||'')}" /></div>
    `;

    openModal('patientFormModal');
}

/* ⭐ دالة موحدة لـ submit الـ patient form */
function handlePatientFormSubmit(e) {
    e.preventDefault();
    if (state.currentDynamicDept) {
        saveDynamicItem(e);
        return;
    }
    savePatient(e);
}

function saveDynamicItem(e) {
    e.preventDefault();
    const deptId = state.currentDynamicDept;
    const dept = state.data.config.departments.find(d => d.id === deptId);
    if (!dept) {
        console.error('Dept not found:', deptId);
        showToast(t('toast.deptNotFound'), 'error');
        state.currentDynamicDept = null;
        state.editingPatientId = null;
        closeModalById('patientFormModal');
        return;
    }

    const dd = state.data.departmentsData[deptId] || (state.data.departmentsData[deptId] = { entityType: dept.entityType, items: [] });
    if (!Array.isArray(dd.items)) dd.items = [];

    const getVal = id => $(id)?.value || '';
    const name = getVal('p_name').trim();
    const phone = getVal('p_phone').trim();
    if (!name || !phone) { showToast(t('toast.requiredFields'), 'error'); return; }

    const duplicate = dd.items.some(it => it.phone === phone && it.id !== state.editingPatientId);
    if (duplicate) { showToast(t('toast.duplicate'), 'error'); return; }

    const age = parseInt(getVal('p_age')) || 0;
    const birthDate = getVal('p_birthDate');
    const gender = getVal('p_gender');
    const total = safeNumber(getVal('p_total'));
    const paid = safeNumber(getVal('p_paid'));
    const remaining = Math.max(0, total - paid);
    const notes = getVal('p_notes');

    const existing = state.editingPatientId
        ? dd.items.find(it => it.id === state.editingPatientId)
        : null;

    const item = {
        id: existing?.id || generateId(),
        name, phone,
        age: age || (birthDate ? calculateAgeFromBirth(birthDate) : 0),
        birthDate: birthDate || '',
        gender,
        totalAmount: total,
        paidAmount: paid,
        remaining,
        notes,
        visits: existing?.visits ? [...existing.visits] : [],
        payments: existing?.payments ? [...existing.payments] : [],
        createdAt: existing?.createdAt || new Date().toISOString()
    };

    if (!existing && paid > 0) {
        item.payments.push({ date: todayStr(), amount: paid, method: 'كاش' });
        item.visits.push({
            date: todayStr(),
            procedure: currentLang==='ar'?'زيارة أولى':'Initial visit',
            procedurePrice: total,
            payment: paid,
            notes: notes || ''
        });
    }

    if (existing) {
        const idx = dd.items.findIndex(it => it.id === existing.id);
        dd.items[idx] = item;
        addActivity('تعديل عنصر', `${name} (${dept.nameAr})`);
    } else {
        dd.items.push(item);
        addActivity('إضافة عنصر', `${name} (${dept.nameAr})`);
    }

    // ⭐ تنظيف الحالة أولاً قبل أي render
    state.editingPatientId = null;
    state.currentDynamicDept = null;

    saveData();
    closeModalById('patientFormModal');

    // إعادة الرسم بعد إغلاق المودال
    try {
        renderAll();
        renderDynamicPages();
    } catch (err) {
        console.error('Render error after save:', err);
    }

    showToast(t('toast.saved'), 'success');
}

/* ============================================================
   45) DYNAMIC ITEM FILE
   ============================================================ */
function openDynamicItemFile(deptId, itemId) {
    const dept = state.data.config.departments.find(d => d.id === deptId);
    if (!dept) return;
    const dd = state.data.departmentsData[deptId];
    if (!dd) return;
    const item = (dd.items || []).find(x => x.id === itemId);
    if (!item) return;

    state.currentPatientId = itemId;
    state.currentDynamicDept = deptId;

    const pf = $('patientFilePage');
    if (pf) { pf.style.display = 'block'; pf.classList.add('active'); }
    $$('.page').forEach(pg => pg.classList.remove('active'));

    const title = $('patientFileTitle');
    if (title) title.textContent = `📋 ${item.name} - ${currentLang==='ar'?dept.nameAr:dept.nameEn}`;

    renderDynamicItemFile(dept, item);
}

function renderDynamicItemFile(dept, item) {
    const container = $('patientFileContent');
    if (!container) return;
    const firstVisit = getFirstVisit(item.visits);
    const lastVisit = getLastVisit(item.visits);

    container.innerHTML = `
        <div class="patient-file-info">
            <div class="field"><label>${currentLang==='ar'?'الاسم':'Name'}</label><div class="value">${escapeHTML(item.name)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الهاتف':'Phone'}</label><div class="value">${escapeHTML(item.phone)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'العمر':'Age'}</label><div class="value">${safeNumber(item.age)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'الجنس':'Gender'}</label><div class="value">${escapeHTML(item.gender||'-')}</div></div>
            <div class="field"><label>${currentLang==='ar'?'القسم':'Department'}</label><div class="value">${escapeHTML(currentLang==='ar'?dept.nameAr:dept.nameEn)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'أول زيارة':'First Visit'}</label><div class="value">${escapeHTML(firstVisit)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'آخر زيارة':'Last Visit'}</label><div class="value">${escapeHTML(lastVisit)}</div></div>
            <div class="field"><label>${currentLang==='ar'?'المتبقي':'Remaining'}</label><div class="value" style="color:${safeNumber(item.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(item.remaining)}</div></div>
        </div>

        <div class="patient-file-section">
            <h4>💰 ${currentLang==='ar'?'المالية':'Financial'}</h4>
            <div class="info-grid">
                <div class="info-item"><span class="label">${t('table.total')}</span><span class="val">${formatCurrency(item.totalAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.paid')}</span><span class="val" style="color:var(--success)">${formatCurrency(item.paidAmount)}</span></div>
                <div class="info-item"><span class="label">${t('table.remaining')}</span><span class="val" style="color:${safeNumber(item.remaining) > 0 ? 'var(--danger)' : 'var(--success)'}">${formatCurrency(item.remaining)}</span></div>
            </div>
        </div>

        <div class="patient-file-section">
            <h4>📅 ${currentLang==='ar'?'الزيارات':'Visits'}</h4>
            ${(item.visits||[]).length ? item.visits.map(v => {
                const priceTxt = safeNumber(v.procedurePrice) > 0 ? `+${formatCurrency(v.procedurePrice)}` : '';
                const payTxt = safeNumber(v.payment) > 0 ? `+${formatCurrency(v.payment)}` : '';
                return `
                    <div class="visit-item">
                        <div class="visit-info">
                            <span>📅 ${escapeHTML(v.date)}</span>
                            <span>📝 ${escapeHTML(v.procedure || '')}</span>
                            ${v.notes ? `<span style="color:var(--text-light);font-size:12px;">- ${escapeHTML(v.notes)}</span>` : ''}
                        </div>
                        <div style="display:flex;gap:10px;">
                            ${priceTxt ? `<span class="visit-amount price">${priceTxt}</span>` : ''}
                            ${payTxt ? `<span class="visit-amount payment">${payTxt}</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('') : `<div style="color:var(--text-light);">${t('common.none')}</div>`}
        </div>

        <div class="patient-file-actions">
            <button class="btn-secondary" id="dynBackBtn">← ${t('common.back')}</button>
        </div>
    `;

    $('dynBackBtn')?.addEventListener('click', () => {
        state.currentDynamicDept = null;
        const pf = $('patientFilePage');
        if (pf) { pf.style.display = 'none'; pf.classList.remove('active'); }
        showPage('dept-' + dept.id);
    });
}

function deleteDynamicItem(deptId, itemId) {
    const dd = state.data.departmentsData[deptId];
    if (!dd) return;
    const item = (dd.items || []).find(x => x.id === itemId);
    if (!item) return;
    showConfirmDialog(
        (currentLang==='ar'?`حذف "${item.name}"؟`:`Delete "${item.name}"?`),
        () => {
            dd.items = dd.items.filter(x => x.id !== itemId);
            saveData();
            renderAll();
            renderDynamicPages();
            showToast(t('toast.deleted'), 'warning');
        }
    );
}

/* ============================================================
   46) BOOTSTRAP
   ============================================================ */
function bindGlobalHandlers() {
    $('loginForm')?.addEventListener('submit', handleLogin);
    $('loginSettingsForm')?.addEventListener('submit', saveLoginSettings);

    $('menuBtn')?.addEventListener('click', toggleSidebar);
    $('langArBtn')?.addEventListener('click', () => setLanguage('ar'));
    $('langEnBtn')?.addEventListener('click', () => setLanguage('en'));
    $('themeToggleBtn')?.addEventListener('click', toggleTheme);
    $('notifBtn')?.addEventListener('click', showNotifications);
    $('logoutBtn')?.addEventListener('click', handleLogout);

    $('searchBtn')?.addEventListener('click', globalSearch);
    $('clearSearchBtn')?.addEventListener('click', clearSearch);
    $('globalSearch')?.addEventListener('keydown', e => { if (e.key === 'Enter') globalSearch(); });

    $('refreshChartsBtn')?.addEventListener('click', refreshCharts);
    $('refreshChartsBtn2')?.addEventListener('click', refreshCharts);

    $('addPatientBtn')?.addEventListener('click', () => {
        state.currentDynamicDept = null;
        openPatientForm();
    });
    $('addBeautyBtn')?.addEventListener('click', () => openForm('beauty'));
    $('addRentalBtn')?.addEventListener('click', () => openForm('rental'));
    $('addExpenseBtn')?.addEventListener('click', () => openForm('expense'));

    $('prevMonthBtn')?.addEventListener('click', () => changeMonth(-1));
    $('nextMonthBtn')?.addEventListener('click', () => changeMonth(1));
    $('todayBtn')?.addEventListener('click', goToToday);

    $$('#reportTabs .tab-btn').forEach(b => {
        b.addEventListener('click', () => showReportType(b.getAttribute('data-report')));
    });

    $$('#settingsTabs .tab-btn').forEach(b => {
        b.addEventListener('click', () => renderSettingsTab(b.getAttribute('data-tab')));
    });

    $('exportCard')?.addEventListener('click', exportData);
    $('importCard')?.addEventListener('click', () => $('importFile')?.click());
    $('importFile')?.addEventListener('change', importData);
    $('restoreCard')?.addEventListener('click', restoreBackup);

    $('backToPatientsBtn')?.addEventListener('click', () => {
        state.currentDynamicDept = null;
        goBackToPatients();
    });
    $('printPatientFileBtn')?.addEventListener('click', () => window.print());
    $('exportPatientPdfBtn')?.addEventListener('click', exportPatientPDF);
    $('printBeautyBtn')?.addEventListener('click', () => window.print());
    $('exportBeautyPdfBtn')?.addEventListener('click', exportBeautyPDF);

    $('visitForm')?.addEventListener('submit', saveVisit);
    $('paymentForm')?.addEventListener('submit', savePayment);

    $('addServiceFromDropdownBtn')?.addEventListener('click', addServiceFromDropdown);
    $('visitServiceSelect')?.addEventListener('change', () => {
        if ($('visitServiceSelect')?.value) addServiceFromDropdown();
    });

    /* ⭐ ربط form المريض بالدالة الموحدة */
    $('patientForm')?.addEventListener('submit', handlePatientFormSubmit);
    $('dynamicForm')?.addEventListener('submit', saveForm);

    $('addDeptForm')?.addEventListener('submit', saveDepartment);
    $('serviceForm')?.addEventListener('submit', saveService);
    $('userForm')?.addEventListener('submit', saveUser);
}

function exportPatientPDF() {
    const el = $('patientFileContent');
    if (!el) return;
    if (typeof html2pdf !== 'undefined') {
        html2pdf().from(el).save('patient-file.pdf');
        showToast('✅ PDF', 'success');
    } else {
        showToast(currentLang==='ar'?'استخدم الطباعة':'Use print', 'warning');
    }
}
function exportBeautyPDF() {
    const el = $('beautyFileContent');
    if (!el) return;
    if (typeof html2pdf !== 'undefined') {
        html2pdf().from(el).save('beauty-file.pdf');
        showToast('✅ PDF', 'success');
    } else {
        showToast(currentLang==='ar'?'استخدم الطباعة':'Use print', 'warning');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        const theme = localStorage.getItem(STORAGE_KEYS.theme);
        if (theme === 'dark') document.body.classList.add('dark');
    } catch(e){}

    try {
        const lang = localStorage.getItem(STORAGE_KEYS.lang);
        if (lang && translations[lang]) currentLang = lang;
    } catch(e){}
    applyTranslations();

    loadData();
    applyBranding();
    bindGlobalHandlers();

    let session = null;
    let userId = null;
    try {
        session = localStorage.getItem(STORAGE_KEYS.session);
        userId = localStorage.getItem(STORAGE_KEYS.currentUser);
    } catch(e){}

    if (session === 'true' && userId) {
        const user = (state.data.config.users || []).find(u => u.id === userId);
        if (user && user.active !== false) {
            state.currentUser = {
                id: user.id, username: user.username,
                displayName: user.displayName || user.username,
                isAdmin: !!user.isAdmin,
                permissions: user.isAdmin ? fullPermissions() : normalizePermissions(user.permissions)
            };
            state.loggedIn = true;
            $('loginScreen').style.display = 'none';
            $('mainApp').style.display = 'block';
            $('userNameHeader').textContent = state.currentUser.displayName;
            renderSidebar();
            renderAll();
            startAutoBackup();
            generateNotifications();
        } else {
            try { localStorage.removeItem(STORAGE_KEYS.session); localStorage.removeItem(STORAGE_KEYS.currentUser); } catch(e){}
        }
    }

    console.log('%c🏥 Clinic Management Platform v5.1','color:#0D9488;font-weight:bold;font-size:14px;');
    console.log('%cDefault login: admin / 123456','color:#6b7a8a;font-size:12px;');
});