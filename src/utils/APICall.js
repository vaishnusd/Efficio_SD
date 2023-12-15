export default APICall = (apiGot, jsonDataToPassInApi, result, action) => {
    (async () => {
        try {
            let api = await fetch(
                apiGot,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonDataToPassInApi),
                }
            );
            if (api.ok) {
                if (action === 'getReport') {
                    const resp = await api.json();
                    const ans = resp['members'];
                    result(ans, null);
                } else if (action === "checkAuthentication") {
                    const resp = await api.json();
                    const ans = resp['members'];
                    if (ans[0].plantName !== "") {
                        result("User Authentication Success");
                    } else {
                        result("User Authentication Failed")
                    }
                } else {
                    result("Success");
                    console.log("Data Sent");
                }
            } else {
                console.log('ApiStatus', api.status);
                if (action === 'getReport') {
                    result(null, null);
                } else {
                    result("Failed")
                    console.log("Error in sending Data");
                }
            }
        } catch (error) {
            console.log('Error Got: ', error);
            if (action === 'getReport') {
                result(null, "error");
            } else {
                console.log("Internal Server Error in sending Data");
            }
        }
    })();
}