import StepBox from '@/components/StepBox'
import dynamic from 'next/dynamic'

const MapWithNoSSR = dynamic(() => import('../components/ExploreMap'), {
    ssr: false,
})

export default function Home() {
    return (
        <>
            <video src="/hero.mp4" loop autoPlay muted className='heroImage' />
            <div className='heroContentOuter'>
                <div className='heroContentInner'>
                    <h1 style={{ color: 'black', fontSize: '3.5rem' }}>It's summer. Time to<br /><span className='fancyText'>unwind</span>.</h1>
                </div>
            </div>
            <div className='pageContent'>
                <h1 className='pageBigHeader'>School can be stressful.<br />Take a break and go somewhere with PRONTO.</h1>
                <h2>Transit is free for everyone 18 and under. Scroll down to learn more.</h2>
                <MapWithNoSSR />
                <div className='stepBoxes'>
                    <StepBox title={"Go anywhere"}>With a wide variety of routes and destinations, transit can get you where you need to go.</StepBox>
                    <StepBox title={"Go quickly"}>f</StepBox>
                    <StepBox title={"Go comfortably"}>f</StepBox>
                    <StepBox title={"Go safely"}>Bus and Trolley drivers are experienced and fully trained. Stations and vehicles are patrolled by transit enforcement, SDPD, and helpful MTS ambassadors.</StepBox>
                </div>
            </div>
        </>
    )
}