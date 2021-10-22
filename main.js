const LinkSocialMedia = {
  github: 'dudusilva95',
  youtube: 'RainZero',
  facebook: 'eduardo.silva',
  instagram: 'rain.duds',
  twitter: 'Rain'
}

function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
  }
}
changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinkSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
