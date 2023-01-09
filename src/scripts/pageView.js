import '../styles/pageView.css'

export const pageView = (variableContent, indicatorHolder) => {
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

    //Not working correctly due to pageView being called multiple times
    // let originalPos = null;
    // let newPosition = null;
    // let isDragging = false;

    // variableContent.addEventListener('mousedown', event => {
    //     if (pageViewActive !== true) {
    //         return
    //     }
    //     if (event.target.classList[0] !== 'page') {
    //         return;
    //     }
    //     originalPos = event.screenX;
    //     isDragging = true;
    // });

    // variableContent.addEventListener('mousemove', event => {
    //     newPosition = event.screenX - originalPos;
    //     if (!isDragging || newPosition > 0) {
    //         return;
    //     }
    //     event.target.style.transform = `translateX(${newPosition}px)`;
    // });

    // variableContent.addEventListener('mouseup', (event) => {
    //     if (newPosition < -200) {
    //         event.target.remove();
    //         const thisPageIndicator = indicatorHolder.querySelector(`#${event.target.classList[1]}`)
    //         thisPageIndicator.remove();
    //         event.target.style.transform = null;
    //     } else {
    //         event.target.style.transform = null;
    //     }
    //     isDragging = false;
    //     originalPos = null;
    //     newPosition = null;
    // });

    // variableContent.addEventListener('mouseleave', (event) => {
    //     if (isDragging) {
    //         event.target.style.transform = null;
    //         isDragging = false;
    //         originalPos = null;
    //         newPosition = null;
    //     }
    // });
}
