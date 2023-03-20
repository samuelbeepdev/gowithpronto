import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../components/ExploreMap'), {
  ssr: false,
})

export default function Map() {
    return <MapWithNoSSR />
}