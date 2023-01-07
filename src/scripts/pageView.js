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

    pageView.addEventListener('dblclick', (event) => {
        console.log(event.target)
        event.target.parentElement.parentElement.remove();
    })

    page.addEventListener('click', (event) => {
        let pageToView = document.querySelector(`.${event.target.textContent}`);
        if (pageToView === null) return;
        const addPage = document.querySelector('.addPage')
        addPage.style.display = 'none'
        document.querySelectorAll('.pageView').forEach(icon => icon.remove());
        document.body.append(variableContent)
        indicatorHolder.style.display = 'flex';
        header.style.position = 'fixed';
        console.log(pageToView)
        pageToView.scrollIntoView({
            behavior: 'smooth'
        });

    });
}

