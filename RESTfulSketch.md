Due to errors still occurring within the main project this document will describe how I personally envision a RESTful application based on the RFCs.

The core values of a REST-compliant service are the usage of stateless communication between server and client and a uniform interface through which to expose the resources used by said service.

Stateless communication means that the server keeps no track of who placed a certain request and that as a result every single request needs to contain all the information for the request in question.
The uniform interface refers to the identification of resources through the unique and specific URLs that define them.

Knowing this we can make our application REST-compliant if we take into account the following. A GET request from the client will need to address the specific URL for the information they want to receive. For the calculator the best way to handle this would be a dynamic URL based on the actual calculation executed, such as appending the calculation to the end of the URL. In my own application this was not the case but a good example of such dynamic URLs would be Jonas Cristen's project.

Through these dynamic URLs we can expose the needed calculation to our internal logic without the client ever accessing said logic. The answer to a GET request on that URL would then simply be the result of the calculation.

An additional part of the REST architecture is the implementation of caching. The idea here is that recent or often requests are cached to lighten the server load that is caused by the stateless nature of REST. This hasn't been implemented in any of the projects including the one of Mr. Steffens. Seeing as caching is a constraint of the REST architecture our projects can't truly be considered RESTful without it.

In conclusion to make my own project truly RESTful I would need to add dynamic URLs through which the results of the calculation are accessed, most easily achieved by appending said calculation to the end of my URL. This would create specific, unique addresses for my resources. Additionally I would need to implement caching for calculations that are often requested so that my application can scale easier when under heavy load.

The resources used in my personal calculator project would be the http://localhost:8383/index.html which is the base calculator. Any results to calculations would be exposed through http://localhost:8383/index/1-9+-*1-9... . This would give each result a unique URL that can be easily constructed by the code and also easily cached.

PAST-DEADLINE UPDATE:

I recently read the update from Mr Steffens on how a single GET is not sufficient because it's not a resource-centric way of working. As a result my earlier stated solution of appending calculations to the URL and using those within our logic is not truly RESTful.

Instead it would then be preferable to have the client POST the string of our calculation to a URL. The results can then be returned to the client by including them in the 200-range response code or/and through a GET on our specific resource that is created during the server-side calculation (the client does not get to  decide the ID of this resource so we can more easily use it within our system).