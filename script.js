const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const lenses = {
  returns: { index: '01', question: 'What actually creates a durable return?', body: 'I’m learning to move past headline growth and trace the operating mechanics underneath it: margins, reinvestment, capital intensity, and the choices management can truly influence.', proof: 'I built ROIC trees across 5+ portfolio companies and saw how a model becomes a conversation about operations.' },
  essential: { index: '02', question: 'What makes a small business essential?', body: 'Water and wastewater businesses pulled me toward an unglamorous but fascinating corner of the economy. Demand is local, reliability matters, and trust can be a genuine competitive advantage.', proof: 'I supported sourcing and diligence for essential-service businesses with $1–3 million of EBITDA.' },
  ai: { index: '03', question: 'How can AI improve judgment—not replace it?', body: 'I’m experimenting with AI as a sparring partner: use it to surface blind spots, explain a hard concept another way, or stress-test an argument—then own the final thinking myself.', proof: 'This website is one example: AI helped me build it, but the experiences, choices, and point of view are mine.' }
};

const panel = document.querySelector('.lens-panel');
document.querySelectorAll('.lens-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const lens = lenses[tab.dataset.lens];
    document.querySelectorAll('.lens-tab').forEach((item) => {
      item.classList.toggle('active', item === tab);
      item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
    });
    panel.animate([{ opacity: .35, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260 });
    panel.querySelector('.panel-index').textContent = lens.index;
    panel.querySelector('h3').textContent = lens.question;
    panel.querySelector('.panel-body').textContent = lens.body;
    panel.querySelector('.panel-proof strong').textContent = lens.proof;
  });
});
