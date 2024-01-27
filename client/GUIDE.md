
<!-- Authorized JavaScript origins -->
http://localhost:5173
http://localhost


<!--  oAuth Erorr -->
 check for typo (env, ',')

<!--* GOOGLE oAuth -->
first is schema name last is google name // check by console.log('profile', profile);
user = new userDb({
                        googleId: profile.id,
                        username: profile.displayName, // need to match the log name
                        email: profile.emails[0].value,
                        password: profile.password,
                        userImg: profile.photos[0].value,
                        isSeller: profile.isSeller,
                    });

<!--* Email and photos will look like this -->
  emails: [ { value: 'fixwongsapatdev1@gmail.com', verified: true } ],
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/ACg8ocLa1G42AIbjyfmo_wd7HqEzJk_CWN4PhRIJqUV8IKYp=s96-c'
    }
  ]
<!--* so it need [0] -->




<!--* Schema -->
Gig - Category: [
  subCategory:
] = 2 filters

<!-- Add otp Auth -->