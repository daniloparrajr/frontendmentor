import {formatDate} from "./helpers";


const handleNetworkError = () => {
    return new Response(JSON.stringify({
        code: 400,
        message: 'Stupid network Error'
    }));
}

export const getGithubUser = async (username) => {
    try {
        const userRequest = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

        if (!userRequest.ok) {
            return {ok: false, error: 'No results'};
        }

        const githubUser = await userRequest.json();
        let companyUrl = '';

        if (githubUser.company) {
            const orgRequest = await fetch(`https://api.github.com/orgs/${encodeURIComponent((githubUser.company).replace('@', ''))}`);
            if (orgRequest.ok) {
                companyUrl = (await orgRequest.json())?.html_url;
            }
        }

        return {ok: true, companyUrl, ...githubUser};
    } catch (e) {
        return handleNetworkError();
    }
}

export const prepareUserData = (userData) => {
    let {
        avatar_url,
        name,
        login,
        bio,
        created_at,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company,
        companyUrl
    } = userData;

    if (companyUrl !== '') {
        company = `<a href="${companyUrl}">${company}</a>`;
    }

    return {
        avatar_url,
        name: name ?? login.toLowerCase(),
        login: `@${login.toLowerCase()}`,
        bio: bio ?? 'This profile has no bio.',
        created_at: formatDate(created_at),
        public_repos,
        followers,
        following,
        location: location ?? 'Not Available',
        blog: blog ? `<a href="${blog}">${blog}</a>`: 'Not Available',
        twitter_username: twitter_username ?? 'Not Available',
        company: company ?? 'Not Available',
    }
}

export const getUserTemplate = userData => {
    const {
        avatar_url,
        name,
        login,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company
    } = userData;

    if ('content' in document.createElement('template')) {
        const template = document.querySelector('#githubUserTemplate');
        const templateClone = template.content.firstElementChild.cloneNode(true);

        const avatar = templateClone.querySelector('.js-github-user-avatar');
        avatar.setAttribute('src', avatar_url);
        avatar.setAttribute('alt', name);

        templateClone.querySelector('.js-github-user-name').textContent = name;
        templateClone.querySelector('.js-github-user-username').textContent = login;
        templateClone.querySelector('.js-github-user-joined').textContent = created_at;
        templateClone.querySelector('.js-github-user-bio').textContent = bio;
        templateClone.querySelector('.js-github-user-repos').textContent = public_repos;
        templateClone.querySelector('.js-github-user-followers').textContent = followers;
        templateClone.querySelector('.js-github-user-following').textContent = following;
        templateClone.querySelector('.js-github-user-location').textContent = location;
        templateClone.querySelector('.js-github-user-blog').innerHTML = blog;
        templateClone.querySelector('.js-github-user-twitter').textContent = twitter_username;
        templateClone.querySelector('.js-github-user-company').innerHTML = company;

        return templateClone;
    }
};

export const showGithubUser = (response, container) => {
    const userData = prepareUserData(response);
    container.innerHTML = '';
    container.insertAdjacentElement('afterbegin', getUserTemplate(userData));
}