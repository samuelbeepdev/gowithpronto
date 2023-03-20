import StepBox from "@/components/StepBox";
import Link from "next/link";

export default function GetPRONTO() {
    return <div className='miscPage'>
        <h1>Ready to go with PRONTO?</h1>
        <h2>Let's get you set up!</h2>
        <div className='stepBoxes'>
            <StepBox title='Step 1: Download the PRONTO app'>
                <p>To start, you'll need to download the PRONTO app and create an account.<br />You can get the app on Android or Apple devices.</p>
                <Link href={'https://play.google.com/store/apps/details?id=org.sdmts.pronto'}>
                    <img src="/playstore.png" alt="Get it on Google Play" height={90} style={{ verticalAlign: 'middle' }} />
                </Link>
                <Link href={'https://apps.apple.com/us/app/pronto-san-diego/id1577230742'}>
                    <img src="/appstore.svg" alt="Download on the App Store" height={61} style={{ verticalAlign: 'middle' }} />
                </Link>
            </StepBox>
            <StepBox title='Step 2: Create a Virtual Card'>
                <p>To start, you'll need to download the PRONTO app and create an account.<br />You can get the app on Android or Apple devices.</p>
            </StepBox>
            <StepBox title='Step 3: Convert to Youth'>
                <p>Next, you'll need to fill out a quick form telling MTS that you are 18 or under.<br />You can find the form <a href="https://www.sdmts.com/fares-passes-reduced-fares/request-change-reduced-fare-card">here</a>. Make sure to answer truthfully.</p>
            </StepBox>
            <StepBox title='Step 4: Tap and Ride!'>
                <img src="/taporscan.png" height={90}/>
                <p>Every time you ride, you MUST tap or scan your PRONTO card/app.<br />This includes at transfer stations.<br />If you don't, you may be subject to penalties and fines.</p>
            </StepBox>
        </div>
    </div>
}