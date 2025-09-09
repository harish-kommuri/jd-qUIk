import Button from "@qUIk-UI/components/preview/Button"
import UserProfileCard from "@qUIk-UI/components/preview/Card"
import RedButton from "@qUIk-UI/components/preview/RedButton"


const PreviewPage = () => {
    return (
        <>
        <Button>Show Number</Button>
        <RedButton>Not Allowed</RedButton>
        <UserProfileCard name="John Doe" id="JD001" profilePicture="/path/to/profile.jpg" />
        </>
    )
}

export default PreviewPage
