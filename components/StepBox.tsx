export default function StepBox(props: { title: string, children: React.ReactNode }) {
    return <div className='stepBox'>
        <h3 className="stepBoxTitle">{props.title}</h3>
        {props.children}
    </div>
}