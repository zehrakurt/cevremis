$body = @{email='cevremis@gmail.com'; password='cevremis2026'} | ConvertTo-Json
$r = Invoke-WebRequest -Uri 'http://localhost:3001/api/admin/login' -Method POST -ContentType 'application/json' -Body $body -UseBasicParsing
Write-Host "Status: $($r.StatusCode)"
Write-Host "Body: $($r.Content)"
