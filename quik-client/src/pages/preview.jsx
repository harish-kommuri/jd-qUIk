import Button from "@qUIk-UI/components/preview/Button"
import UserProfileCard from "@qUIk-UI/components/preview/Card"


const PreviewPage = () => {
    return (
        <>
        <Button>Show Number</Button>
        <UserProfileCard name="John Doe" id="JD001" profilePicture="/path/to/profile.jpg" />
        </>
    )
}

export default PreviewPage
