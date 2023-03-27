import StepBox from "@/components/StepBox";
import Link from "next/link";

export default function GetPRONTO() {
    return <div className='miscPage'>
        <h1>Ready to go with PRONTO?</h1>
        <h2>Let's get you set up!</h2>
        <div className='stepBoxes'>
            <StepBox title='What can I ride for free?'>
                <p>As a student 18 or under, you can ride the bus, Trolley, COASTER, and SPRINTER for free. This does NOT include NCTD LIFT or MTS Access paratransit services, and other special services may be exempt. Use on Amtrak Pacific Surfliner (south of Oceanside ONLY) is permitted under with some <a href="https://www.pacificsurfliner.com/plan-your-trip/connections/rail-2-rail-program/">blackout dates</a> - use the COASTER validator to board.</p>
            </StepBox>
            <StepBox title='How do I get PRONTO?'>
                <p>
                    To start, you'll need to download the PRONTO app and create an account. You can get the app on Android or Apple devices.
                    Once you're logged in, click "Create Virtual Card" and create an Adult card.
                    Then, fill out <a href="https://www.sdmts.com/fares/reduced-fares/request-change-reduced-fare-card">this form</a> and the card will be converted to Youth.
                    After that, you'll be ready to tap and ride!
                </p>
                <Link href={'https://play.google.com/store/apps/details?id=org.sdmts.pronto'}>
                    <img src="/playstore.png" alt="Get it on Google Play" height={90} style={{ verticalAlign: 'middle' }} />
                </Link>
                <Link href={'https://apps.apple.com/us/app/pronto-san-diego/id1577230742'}>
                    <img src="/appstore.svg" alt="Download on the App Store" height={61} style={{ verticalAlign: 'middle' }} />
                </Link>
            </StepBox>
            <StepBox title='Do I need to validate?'>
                <p>Yes. You need to validate your PRONTO card or app every ride, every time. This includes changing trains at transfer stations, or when transferring to a bus. This allows us to validate your age and collect data about who's riding. Plus, more riders and a stronger system help us get the funding we need to keep running trains and buses on time!</p>
            </StepBox>
            <StepBox title='How do I validate my PRONTO card or app?'>
                <p>Validators are located throughout Trolley, SPRINTER and COASTER platforms, and at the entrance of all MTS and NCTD buses. Ticket machines are not validators, so be sure to look for the purple validator on the platform and tap or scan before boarding a train or while boarding a bus. If boarding at a station that has both Trolley and COASTER, please be aware of which validator you are using.</p>
            </StepBox>
            <StepBox title='Is it safe to ride the bus and Trolley?'>
                <p>Yes. Bus and Trolley drivers are experienced, fully trained commerical drivers. Stations and vehicles are consistently patrolled by transit enforcement, SDPD, and helpful MTS ambassadors. If you need public safety support, you can text MTS Ride Assured at 619.318.1338.</p>
            </StepBox>
        </div>
    </div>
}