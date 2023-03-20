import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <>
            <video src="/hero.mp4" loop autoPlay muted className='heroImage' />
            <div className='heroContentOuter'>
                <div className='heroContentInner'>
                    <h1 style={{ color: 'black', fontSize: '3rem' }}>Go beyond <Typewriter
                        options={{
                            strings: ['Barrio Logan', 'Chula Vista', 'East Village', 'Hillcrest', 'Little Italy', 'North Park', 'Old Town', 'Pacific Beach', 'Point Loma', 'Scripps Ranch', 'City Heights', 'Tierrasanta', 'Kearney Mesa', 'Clairemont'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'heroContentTypewriter',
                            cursorClassName: 'heroContentTypewriterCursor'
                        }}
                    />and explore San Diego.</h1>
                </div>
            </div>
            <div className='mobileHero'>
                <h1 style={{ fontSize: '1.6rem', color: 'black' }}>Go beyond <Typewriter
                    options={{
                        strings: ['Barrio Logan', 'Chula Vista', 'East Village', 'Hillcrest', 'Little Italy', 'North Park', 'Old Town', 'Pacific Beach', 'Point Loma', 'Scripps Ranch', 'City Heights', 'Tierrasanta', 'Kearney Mesa', 'Clairemont'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'heroContentTypewriter',
                        cursorClassName: 'heroContentTypewriterCursor'
                    }}
                />and explore San Diego.</h1>
            </div>
            <div className='pageContent'>
                {/* <h1 className='pageBigHeader'>You've got the card. Now, it's time to go with PRONTO.</h1> */}
            </div>
        </>
    )
}