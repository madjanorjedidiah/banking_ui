

const PostData = async (url, post_body) => {
	try {
		let res = fetch(url, {
			method : "POST",
			headers : {"Content-Type" : "application/json",
						'Authorization': 'Token 572d5ab4f3a646f9168726c3fc514b933b382da6'
					},
			body : JSON.stringify(post_body)
		}).then(response => {
			if (response.status === 200) {
				console.log(1)
				return response.json()
			}
		})
	}
	catch (err){
		console.log(err)
	}
}



export default PostData;