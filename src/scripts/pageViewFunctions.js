import '../styles/pageView.css'

export const pageViewFunctions = (variableContent, indicatorHolder) => {
    const pageView = document.querySelector('.pageView')

    pageView.style.display = 'flex'
    indicatorHolder.style.display = 'none'

    pageView.appendChild(variableContent)
    document.body.style.all = 'unset'

    const exitPageView = (event) => {
        const form = document.querySelector('.form')
        if (!form) {
            let pageToView = document.querySelector(`.${event.target.classList[1]}`);
            if (pageToView === null) return;
            document.body.append(variableContent);
            indicatorHolder.style.display = 'flex';
            pageToView.scrollIntoView({
                behavior: 'smooth'
            });
            pageView.style.display = 'none'
        }
        variableContent.removeEventListener('click', exitPageView);
    }
    variableContent.addEventListener('click', exitPageView);
}
