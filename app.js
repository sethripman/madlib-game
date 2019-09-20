function handleKeyPress() {
    const noun1Span = document.getElementById('noun1');
    const noun1Input = document.getElementById('noun-1');
    noun1Span.textContent = noun1Input.value;
    const noun2Span = document.getElementById('noun2');
    const noun2Input = document.getElementById('noun-2');
    noun2Span.textContent = noun2Input.value;
    const noun3Span = document.getElementById('noun3');
    const noun3Input = document.getElementById('noun-3');
    noun3Span.textContent = noun3Input.value;
    const noun4Span = document.getElementById('noun4');
    const noun4Input = document.getElementById('noun-4');
    noun4Span.textContent = noun4Input.value;
    const noun5Span = document.getElementById('noun5');
    const noun5Input = document.getElementById('noun-5');
    noun5Span.textContent = noun5Input.value;
    const verb1Span = document.getElementById('verb1');
    const verb1Input = document.getElementById('verb-1');
    verb1Span.textContent = verb1Input.value;
    const verb2Span = document.getElementById('verb2');
    const verb2Input = document.getElementById('verb-2');
    verb2Span.textContent = verb2Input.value;
// IO

    const hideMe = document.getElementById('surprise');
    hideMe.classList.remove('hidden');
// Make hidden appear!
}