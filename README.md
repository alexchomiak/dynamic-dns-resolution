# dynamic-dns-resolution
An example nginx confguration that takes subdomains out of the request and reconstructs a request to an API server using that subdomain as a url parameter.


## Setup
To spin up the project, just run:
```
 docker-compose up
```

## See it in action
Just make a request to <subdomain_name>.localhost:4000 and it will send a request to a node server which will just print out that subdomain back to you. This can be useful for apps that require services to be spun up on a per user basis dynamically, or allow for the subdomain to resolve to per user content.
