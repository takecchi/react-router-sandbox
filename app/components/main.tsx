export default function Main({params, path}: {
    params?: {
        [key: string]: string | undefined;
    }, path: string
}) {
    return (
        <main style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div>Params: {params ? JSON.stringify(params) : `none`}</div>
            <div>Path: {path}</div>
        </main>
    );
}