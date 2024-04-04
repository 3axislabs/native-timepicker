const createElement = (classNames = [], contents = [], name = 'div') => {
    const element = document.createElement(name)

    element.classList.add(...classNames)

    contents.forEach(content => {
        if (typeof content === 'string') {
            element.innerText = content
        } else {
            element.appendChild(content)
        }
    })

    return element
}

const createBox = (content) => {
    return createElement(['box'], [content])
}

const createBoxes = (start, end, step) => {
    const boxes = []

    for (let i = start; i <= end; i += step) {
        boxes.push(createBox(String(i).padStart(2, '0')))
    }

    return boxes
}

const createTimeBlock = () => {
    const boxes = createBoxes(1, 12, 1)

    return createElement(['box-container'], boxes)
}

const createMinuteBlock = () => {
    const boxes = createBoxes(5, 55, 5)

    return createElement(['box-container'], boxes)
}

const createAmPmBlock = () => {
    const amElement = createElement(['box'], ['AM'])
    const pmElement = createElement(['box'], ['PM'])

    return createElement(['box-container'], [amElement, pmElement])
}

const createTimePicker = () => {
    const timeBlock = createTimeBlock()
    const minuteBlock = createMinuteBlock()
    const amPmBlock = createAmPmBlock()

    return createElement(['wrapper'], [timeBlock, minuteBlock, amPmBlock])
}

const nativePicker = function (inputElement) {
    const draw = () => {

    }

    const handleInput = (event) => {
        const popupElement = createElement()

        event.target.parentNode.insertBefore(popupElement, event.target.nextSibling)

        let top = inputElement.offsetTop + inputElement.offsetHeight
        let left = inputElement.offsetLeft

        const timePicker = createTimePicker()

        timePicker.style.position = 'absolute'
        timePicker.style.left = `${left}px`
        timePicker.style.top = `${top}px`

        popupElement.appendChild(timePicker)
    }

    inputElement.addEventListener('focus', handleInput)
}

// export { ttimePicker }

// new ttimePicker(time2)
// new fg.Timepicker(time2)