import Link from 'next/link'

export default function E404() {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0 }}>
        <div>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Looks like our dispatchers never got the message.<br />Why not head back <Link href={'/'}>home</Link>?</p>
        </div>
    </div>
}