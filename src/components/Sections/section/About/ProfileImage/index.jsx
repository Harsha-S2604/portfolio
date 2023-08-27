const ProfileImage = () => {
    return (
        <div id="profile-image" className="profile-image">
            <div>
                <img src="/images/profile_pic_rect_back.png" className="image-stack" alt="rect" />
                <img src="/images/profile_picture.jpg" className="image-stack profile-picture" alt="profile-pic" />
            </div>
        </div>
    )
}

export default ProfileImage