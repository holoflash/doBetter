import '../styles/pageView.css'

export const pageViewFunctions = (variableContent, indicatorHolder) => {
    let pageViewActive = true;
    const header = document.querySelector('.header')
    const pageView = document.querySelector('.pageView')

    pageView.style.display = 'flex'
    header.style.position = 'relative';
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
            header.style.position = 'fixed';
            pageToView.scrollIntoView({
                behavior: 'smooth'
            });
            pageView.style.display = 'none'
            pageViewActive = false;
        }
        variableContent.removeEventListener('click', exitPageView);
    }
    variableContent.addEventListener('click', exitPageView);
}
