export default function Hex() {
    return (
        <mesh position={[0, 0, 0]}>
            <circleGeometry args={[2, 6, 11]} />
            <meshBasicMaterial color={0xffff00}/>
        </mesh>
    )
}