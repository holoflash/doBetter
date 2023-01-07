import '../styles/pageView.css'

export const pageView = (variableContent, indicatorHolder, page) => {
    const header = document.querySelector('.header')
    const pageView = document.createElement('div')
    pageView.classList.add('pageView');

    header.style.position = 'relative';
    indicatorHolder.style.display = 'none'

    pageView.appendChild(variableContent)

    document.body.append(pageView);
    document.body.style.all = 'unset'

    page.addEventListener('click', (event) => {
        let pageToView = document.querySelector(`.${event.target.textContent}`);
        if (pageToView === null) return;
        const addPage = document.querySelector('.addPage')
        addPage.style.display = 'none'
        document.querySelectorAll('.pageView').forEach(icon => icon.remove());
        document.body.append(variableContent)
        indicatorHolder.style.display = 'flex';
        header.style.position = 'fixed';
        pageToView.scrollIntoView({
            behavior: 'smooth'
        });

    });
}
