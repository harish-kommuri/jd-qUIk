import { useRouter } from "next/router"

const ZeplinLoginRedirect = () => {
    const router = useRouter()

    return (
        <div>
            <dl>
            {Object.entries(router.query).map(([key, value]) => {
                return (
                    <>
                        <dd>{key}: </dd><dt>{value}</dt>
                    </>
                )
            })}
            </dl>
        </div>
    );
}

export default ZeplinLoginRedirect
