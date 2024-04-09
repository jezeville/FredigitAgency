

let btnDevis = document.getElementById('devis');
let devisSection = document.querySelector('.main__devis');

btnDevis.addEventListener('click', function() {
    if (devisSection.style.display === 'none' || devisSection.style.display === '') {
        devisSection.style.display = 'block';
        if (questionSection.style.display === 'block') {
            questionSection.style.display = 'none';
        }
    } else { 
        devisSection.style.display = 'none';
    }
});

let btnQuestion = document.getElementById('question');
let questionSection = document.querySelector('.main__question');

btnQuestion.addEventListener('click', function() {
    if (questionSection.style.display === 'none' || questionSection.style.display === '') {
        questionSection.style.display = 'block';
        if (devisSection.style.display === 'block') {
            devisSection.style.display = 'none';
        }
    } else { 
        questionSection.style.display = 'none';
    }
});
