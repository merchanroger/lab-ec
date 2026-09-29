const exams=[
['Ácido úrico','$3,30'],['Albúmina','$3,30'],['Amilasa','$4,00'],['Aglutinaciones febriles','$7,00'],['ASTO - Antiestreptolisina','$8,80'],['Alfa feto proteínas - AFP','$13,28'],['Ácido fólico','$13,00'],['ACTIN F. IgA / ACTIN','$28,60'],['ACTIN IgG','$28,60'],['ANCA C-P','$40,00'],['ASCA IgG','$25,50'],['ASCA IgA','$25,50'],['Antitrombina','$39,61'],['Apolipoproteína A1','$15,40'],['Apolipoproteína B','$9,36'],['BUN (incluye urea)','$6,09'],['Creatinina','$3,30'],['Colesterol total','$3,30'],['Colesterol HDL','$5,50'],['Colesterol LDL','$5,60'],['Coprocultivo (heces)','$22,00'],['Calcio','$4,00'],['CA 125 (ovario, útero)','$15,40'],['Ceruloplasmina','$35,07'],['Calprotectina','$36,40'],['Calcio iónico','$8,00'],['Cloro','$3,38'],['Cardiolipina IgG','$24,44'],['Cardiolipina IgM','$24,44'],['CK MB-CPK','$13,52'],['Creatinina (orina)','$6,09'],['Colinesterasa','$4,40'],['Interleukina 6','$34,00'],['Insulina plasmática en ayunas','$14,30'],['IgG por nefelometría','$16,00'],['IgM por nefelometría','$17,00'],['IgA por nefelometría','$17,00'],['IgE total','$16,00'],['Influenza A/B/H1N1 por PCR GeneXpert','$188,37'],['Influenza A/B antígeno','$28,00'],['Insulina 2h post prandial','$34,00'],['KOH','$13,20'],['Kappa (orina)','$27,63'],['Kappa 24h','$28,60'],['Lipasa','$4,40'],['LDH (deshidrogenasa láctica)','$4,40'],['Linfocitos B (CD19-CD20)','$80,00'],['Linfocitos NK (CD16-CD56)','$48,30'],['Lipoproteína A','$16,00'],['Litio','$16,00'],['Lactoferrina','$20,00'],['Norovirus','$40,00'],['Osmolalidad','$14,49'],['Osteocalcina','$50,72'],['Oxalato urinario','$46,20'],['Opiáceos cuantitativa','$11,59'],['Plaquetas','$6,00'],['Prueba de Coombs directa','$9,00'],['Prueba de Coombs indirecta','$9,00'],['Parasitoscópico concentración (heces)','$6,00'],['PSA total','$16,93'],['PSA libre','$25,30'],['Potasio','$4,00'],['Pro-BNP','$65,00'],['Procalcitonina','$74,38'],['Prealbúmina','$30,00'],['Prolactina','$12,00'],['Progesterona','$12,00'],['Rotavirus','$13,00'],['R. de Widal y Weill Felix','$7,00'],['Factor reumatoideo por nefelometría','$16,00'],['RPR','$5,00'],['Rubeola IgG','$16,72'],['Rubeola IgM','$16,72'],['Sangre oculta - HB humana','$7,10'],['Sodio','$4,00'],['Sodio (orina)','$4,00'],['Strept-A','$13,20'],['Salmonella antígeno','$14,00'],['Urea','$3,30'],['Urocultivo (orina)','$18,00'],['Urea 24h','$6,30'],['V.D.R.L.','$5,50'],['Vitamina B12','$13,00'],['VLDL colesterol','$6,30'],['V.D.R.L. cuantitativo','$9,00'],['Varicela zóster IgG','$28,00'],['Varicela zóster IgM','$21,25'],['Vitamina D total','$32,00'],['Vitamina E','$65,10'],['Virus sincitial respiratorio','$36,75'],['Ziehl Neelsen','$7,20'],['Zinc','$35,00'],['Zika virus IgG','$100,49'],['Zika virus IgM','$75,74']
].map(([name,price])=>({name,price}));

const faqs=[
['¿Cómo descargo mis resultados?','LABS indica que los resultados se consultan mediante su aplicación. La información publicada señala que el usuario ingresa con el correo indicado por recepción y, si no modificó la clave, con su número de cédula; luego debe seleccionar “Mis resultados”.'],
['¿Necesito estar en ayunas para todos los exámenes de sangre?','No. LABS señala como ejemplos de pruebas que no requieren ayuno el hemograma, dímero D y pruebas de embarazo, salvo indicación médica.'],
['¿Qué pruebas requieren ayuno?','Entre las pruebas señaladas por LABS están colesterol total, HDL, LDL, VLDL, triglicéridos, glucosa, HOMA-IR y determinados test de aliento. Algunas pruebas pueden requerir preparación adicional.'],
['¿Debo agendar mis exámenes bajo una hora específica?','Depende del examen. LABS recomienda consultar telefónicamente para confirmar la preparación y horario correspondiente.'],
['¿Realizan servicio a domicilio?','Sí. La información publicada por LABS indica servicio a domicilio en Guayaquil y Durán; para otras ciudades recomienda consultar con la sucursal. Generalmente debe agendarse con anticipación.'],
['¿Cómo me preparo para un espermatograma?','LABS indica que no requiere ayuno, que debe existir abstinencia de 5 días y que la muestra debe tomarse en el laboratorio para preservar sus características.'],
['¿En qué tiempo se entrega el resultado del espermatograma?','La información publicada por LABS señala 2 días hábiles.'],
['¿Para qué sirve el espermatograma?','Evalúa características relacionadas con la cantidad y calidad del semen y los espermatozoides.'],
['¿Para qué sirve la hormona antimülleriana?','LABS explica que se utiliza para evaluar la reserva ovárica mediante una muestra de sangre y señala que no requiere ayuno.'],
['¿Qué se analiza en un hemograma?','LABS explica que evalúa el estado general de la sangre y componentes como glóbulos rojos, glóbulos blancos, hemoglobina, hematocrito y plaquetas, entre otros.'],
['¿Hasta qué hora puedo acercarme al laboratorio?','El horario depende de la ciudad y sucursal. Revisa la sección Sedes de esta página antes de acudir.'],
['¿En qué tiempo obtendré mis resultados?','El tiempo depende del examen. LABS indica que algunas pruebas se procesan en pocas horas y otras, como determinados cultivos, requieren más tiempo.'],
['¿Cuáles son los exámenes de tiroides?','LABS menciona TSH, T3 libre y total, y T4 libre y total como pruebas utilizadas para evaluar hormonas tiroideas.'],
['¿Cuáles son los exámenes de la enfermedad celíaca?','LABS menciona DQ2 y DQ8 como pruebas de sangre solicitadas para el diagnóstico de enfermedad celíaca y señala que no requieren ayuno.'],
['¿Cuáles son las formas de pago?','La información publicada por LABS menciona efectivo, tarjeta de crédito, débito, transferencia y cheque.'],
['¿Cómo recojo una muestra de orina de 24 horas?','LABS explica que debe recogerse toda la orina durante 24 horas: se desecha la primera muestra al iniciar y desde entonces se recoge todo hasta la misma hora del día siguiente. Ante dudas, recomienda consultar al laboratorio.']
];
const faqs=[
['¿Cómo descargo mis resultados?','LABS indica que los resultados se consultan mediante su aplicación. La información publicada señala que el usuario ingresa con el correo indicado por recepción y, si no modificó la clave, con su número de cédula; luego debe seleccionar “Mis resultados”.'],
['¿Necesito estar en ayunas para todos los exámenes de sangre?','No. LABS señala como ejemplos de pruebas que no requieren ayuno el hemograma, dímero D y pruebas de embarazo, salvo indicación médica.'],
['¿Qué pruebas requieren ayuno?','Entre las pruebas señaladas por LABS están colesterol total, HDL, LDL, VLDL, triglicéridos, glucosa, HOMA-IR y determinados test de aliento. Algunas pruebas pueden requerir preparación adicional.'],
['¿Debo agendar mis exámenes bajo una hora específica?','Depende del examen. LABS recomienda consultar telefónicamente para confirmar la preparación y horario correspondiente.'],
['¿Realizan servicio a domicilio?','Sí. La información publicada por LABS indica servicio a domicilio en Guayaquil y Durán; para otras ciudades recomienda consultar con la sucursal. Generalmente debe agendarse con anticipación.'],
['¿Cómo me preparo para un espermatograma?','LABS indica que no requiere ayuno, que debe existir abstinencia de 5 días y que la muestra debe tomarse en el laboratorio para preservar sus características.'],
['¿En qué tiempo se entrega el resultado del espermatograma?','La información publicada por LABS señala 2 días hábiles.'],
['¿Para qué sirve el espermatograma?','Evalúa características relacionadas con la cantidad y calidad del semen y los espermatozoides.'],
['¿Para qué sirve la hormona antimülleriana?','LABS explica que se utiliza para evaluar la reserva ovárica mediante una muestra de sangre y señala que no requiere ayuno.'],
['¿Qué se analiza en un hemograma?','LABS explica que evalúa el estado general de la sangre y componentes como glóbulos rojos, glóbulos blancos, hemoglobina, hematocrito y plaquetas, entre otros.'],
['¿Hasta qué hora puedo acercarme al laboratorio?','El horario depende de la ciudad y sucursal. Revisa la sección Sedes de esta página antes de acudir.'],
['¿En qué tiempo obtendré mis resultados?','El tiempo depende del examen. LABS indica que algunas pruebas se procesan en pocas horas y otras, como determinados cultivos, requieren más tiempo.'],
['¿Cuáles son los exámenes de tiroides?','LABS menciona TSH, T3 libre y total, y T4 libre y total como pruebas utilizadas para evaluar hormonas tiroideas.'],
['¿Cuáles son los exámenes de la enfermedad celíaca?','LABS menciona DQ2 y DQ8 como pruebas de sangre solicitadas para el diagnóstico de enfermedad celíaca y señala que no requieren ayuno.'],
['¿Cuáles son las formas de pago?','La información publicada por LABS menciona efectivo, tarjeta de crédito, débito, transferencia y cheque.'],
['¿Cómo recojo una muestra de orina de 24 horas?','LABS explica que debe recogerse toda la orina durante 24 horas: se desecha la primera muestra al iniciar y desde entonces se recoge todo hasta la misma hora del día siguiente. Ante dudas, recomienda consultar al laboratorio.']
];

const locations={
  guayaquil:{city:'Guayaquil',label:'Sede principal',address:'Av. Abel Romeo Castillo y Juan Tanca Marengo, Torre Médica 2, piso 4, consultorios 417 y 418.',hours:'LUN–VIE 06h30–18h00 · SAB 06h30–12h00'},
  quito:{city:'Quito',address:'Av. Mariana de Jesús OE7-02 y Nuño de Valderrama. Edificio CITIMED, Planta Baja Local 7.',hours:'LUN–VIE 07h00–16h00'},
  manta:{city:'Manta',address:'Edificio Umiñamed, planta baja (misma sede de EndoscopyNet Manta).',hours:'LUN–VIE 07h00–15h40'},
  'santo-domingo':{city:'Santo Domingo',address:'Av. Quito, entre Latacunga e Ibarra.',hours:'LUN–VIE 07h30–16h10'},
  milagro:{city:'Milagro',address:'Calle 17 de Septiembre, entre Calle Esmeraldas y Guayas, frente a CNEL.',hours:'LUN–VIE 08h00–16h00'}
};

const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#mainNav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));

document.querySelectorAll('details').forEach(d=>d.addEventListener('toggle',()=>{if(d.open && d.closest('.accordion-list, .faq-list, .health-list')){const group=d.closest('.accordion-list, .faq-list, .health-list');group?.querySelectorAll(':scope > details').forEach(other=>{if(other!==d)other.removeAttribute('open')})}}));

function renderExams(list){const target=document.getElementById('examGrid');if(!target)return;target.innerHTML=list.map((e,i)=>`<article class="exam-card"><span>${String(i+1).padStart(2,'0')}</span><div><b>${e.name}</b></div><button type="button" data-exam="${e.name}" aria-label="Ver precio de ${e.name}">＋</button></article>`).join('') || '<p>No encontramos ese examen. Intenta con otro nombre.</p>';const count=document.getElementById('examCount');if(count)count.textContent=list.length?`${list.length} resultados`:'';}
const examSearch=document.getElementById('examSearch'),catalog=document.getElementById('examCatalog'),toggleExams=document.getElementById('toggleExams');
toggleExams?.addEventListener('click',()=>{const open=!catalog.hidden;catalog.hidden=open;toggleExams.setAttribute('aria-expanded',String(!open));toggleExams.textContent=open?'Ver todos los exámenes':'Ocultar catálogo';if(!open)renderExams(exams)});
examSearch?.addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();if(catalog.hidden){catalog.hidden=false;toggleExams.textContent='Ocultar catálogo';toggleExams.setAttribute('aria-expanded','true')}renderExams(exams.filter(x=>x.name.toLowerCase().includes(q)))});

function renderFaq(){const box=document.getElementById('faqList');if(!box)return;box.innerHTML=faqs.map(([q,a])=>`<details><summary>${q}<span>＋</span></summary><p>${a}</p></details>`).join('')}renderFaq();

function renderLocation(key='guayaquil'){const l=locations[key],box=document.getElementById('locationDetail');if(!l||!box)return;box.innerHTML=`<div class="location-detail-icon">⌖</div><div><p class="kicker">${l.label||'SEDE LABS'}</p><h3>${l.city}</h3><p>${l.address}</p><small>${l.hours}</small><div class="location-actions"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.address)}" target="_blank" rel="noopener">Cómo llegar →</a><a href="tel:+593985090215">Llamar</a><a href="https://wa.me/593985090215" target="_blank" rel="noopener">WhatsApp</a></div></div>`}
renderLocation();
document.querySelectorAll('.city-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.city-tab').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');renderLocation(btn.dataset.city)}));

const modals=[...document.querySelectorAll('.modal')];let quoteStep=1;
function openModal(id){const m=document.getElementById(id);if(!m)return;m.classList.add('show');m.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');if(id==='cotizador'){renderQuote(exams);setStep(1);updateSelected()}}
function closeModal(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')}
document.addEventListener('click',e=>{const open=e.target.closest('[data-open]');if(open){e.preventDefault();openModal(open.dataset.open)}if(e.target.closest('.modal-close'))closeModal(e.target.closest('.modal'));if(e.target.classList.contains('modal'))closeModal(e.target);const exam=e.target.closest('[data-exam]');if(exam){openModal('cotizador');setTimeout(()=>{const q=document.getElementById('quoteSearch');q.value=exam.dataset.exam;renderQuote(exams.filter(x=>x.name.toLowerCase().includes(exam.dataset.exam.toLowerCase())));const cb=document.querySelector('#quoteResults input');if(cb){cb.checked=true;updateSelected()}},30)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modals.forEach(closeModal)});

function selectedExams(){return [...document.querySelectorAll('#quoteResults input:checked')].map(x=>({name:x.value,price:x.dataset.price}))}
function updateSelected(){const items=selectedExams();const c=document.getElementById('selectedCount');if(c)c.textContent=items.length}
function renderQuote(list){const box=document.getElementById('quoteResults');if(!box)return;box.innerHTML=list.slice(0,40).map(e=>`<label class="quote-item"><input type="checkbox" value="${e.name}" data-price="${e.price}"><span>${e.name}</span></label>`).join('')||'<p>No encontramos coincidencias.</p>';box.querySelectorAll('input').forEach(i=>i.addEventListener('change',updateSelected));updateSelected()}
document.getElementById('quoteSearch')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();renderQuote(exams.filter(x=>x.name.toLowerCase().includes(q)))});
function setStep(n){quoteStep=n;document.querySelectorAll('.quote-step').forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===n));document.querySelectorAll('[data-step-indicator]').forEach(s=>s.classList.toggle('active',Number(s.dataset.stepIndicator)===n));const modal=document.querySelector('#cotizador .modal-panel');if(modal)modal.scrollTop=0}
document.getElementById('toStep2')?.addEventListener('click',()=>{if(!selectedExams().length){alert('Selecciona al menos un examen para continuar.');return}setStep(2)});
document.getElementById('toStep3')?.addEventListener('click',()=>{const form=document.getElementById('quoteForm');if(!form.reportValidity())return;const list=document.getElementById('summaryExams');list.innerHTML=selectedExams().map(x=>`<li>${x.name}</li>`).join('');setStep(3)});
document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>setStep(Number(b.dataset.back))));
document.getElementById('toggleBilling')?.addEventListener('click',e=>{const fields=document.getElementById('billingFields');const hidden=fields.hidden;fields.hidden=!hidden;e.currentTarget.querySelector('span').textContent=hidden?'−':'＋'});
document.getElementById('submitQuote')?.addEventListener('click',()=>{const msg=document.getElementById('quoteMsg');msg.textContent=`Solicitud preparada con ${selectedExams().length} examen(es). Para el envío/confirmación final se requiere conectar el cotizador con el backend de LABS.`});

document.getElementById('workForm')?.addEventListener('submit',e=>{e.preventDefault();const file=e.target.cv.files[0],msg=document.getElementById('workMsg');if(!file)return;if(file.size>2*1024*1024){msg.textContent='El archivo supera el límite de 2 MB indicado por LABS.';return}const ext=file.name.split('.').pop().toLowerCase();if(!['doc','docx','pdf'].includes(ext)){msg.textContent='Formato no permitido. Usa doc, docx o pdf.';return}msg.textContent='Postulación preparada. El envío automático requiere conectar el formulario con el backend de selección de LABS.'});

const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('#mainNav>a[href^="#"]')];
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>observer.observe(s));
