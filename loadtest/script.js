import http from 'k6/http'
import {check, sleep} from 'k6'

export let options = {
    stages: [
        {duration: '40s', target: 1}
    ]
}

export default function() {
    const res = http.get('http://localhost:3000/health')
    check(res, {'status was 200': r=> r.status == 200})
    sleep(1)
}