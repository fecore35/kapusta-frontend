import s from './exampleButton.module.scss'

function ExampleButton() {

    return <button className={s.buttonMain + ' ' + s.buttonText + ' ' + s.exampleClass}> This is Style Example Button</button >
}
export default ExampleButton