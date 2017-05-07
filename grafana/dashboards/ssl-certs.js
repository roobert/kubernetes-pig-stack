
{
  "annotations": {
    "list": []
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "hideControls": false,
  "id": 5,
  "links": [],
  "rows": [
    {
      "collapse": false,
      "height": "250px",
      "panels": [
        {
          "columns": [
            {
              "text": "Current",
              "value": "current"
            }
          ],
          "filterNull": false,
          "fontSize": "100%",
          "id": 1,
          "links": [],
          "pageSize": null,
          "scroll": true,
          "showHeader": true,
          "sort": {
            "col": 1,
            "desc": false
          },
          "span": 12,
          "styles": [
            {
              "colorMode": "cell",
              "colors": [
                "rgba(245, 54, 54, 0.9)",
                "rgba(237, 129, 40, 0.89)",
                "rgba(50, 172, 45, 0.97)"
              ],
              "dateFormat": "YYYY-MM-DD HH:mm:ss",
              "decimals": 0,
              "pattern": "Current",
              "thresholds": [
                "0",
                "691200"
              ],
              "type": "number",
              "unit": "dtdurations"
            }
          ],
          "targets": [
            {
              "expr": "probe_ssl_earliest_cert_expiry - time()",
              "intervalFactor": 1,
              "legendFormat": "{{instance}}",
              "metric": "probe_ssl_earliest_cert_expiry",
              "refId": "A",
              "step": 20
            }
          ],
          "title": "SSL Certs - TTL",
          "transform": "timeseries_aggregations",
          "type": "table"
        }
      ],
      "repeat": null,
      "repeatIteration": null,
      "repeatRowId": null,
      "showTitle": false,
      "title": "Dashboard Row",
      "titleSize": "h6"
    }
  ],
  "schemaVersion": 14,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "browser",
  "title": "SSL Certs",
  "version": 0
}
