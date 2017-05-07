
{
  "annotations": {
    "list": []
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "hideControls": false,
  "id": 6,
  "links": [],
  "refresh": false,
  "rows": [
    {
      "collapse": false,
      "height": 250,
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
            "col": 0,
            "desc": true
          },
          "span": 12,
          "styles": [
            {
              "colorMode": "row",
              "colors": [
                "rgba(50, 172, 45, 0.97)",
                "rgba(237, 129, 40, 0.89)",
                "rgba(245, 54, 54, 0.9)"
              ],
              "decimals": 0,
              "pattern": "Current",
              "thresholds": [
                "0",
                "0"
              ],
              "type": "number",
              "unit": "short"
            }
          ],
          "targets": [
            {
              "expr": "kube_pod_status_phase{phase=\"Failed\"}",
              "hide": false,
              "intervalFactor": 1,
              "legendFormat": "{{namespace}} - {{pod}}",
              "metric": "kube_pod_status_phase",
              "refId": "A",
              "step": 60
            }
          ],
          "title": "Pods - Failed",
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
    },
    {
      "collapse": false,
      "height": 250,
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
          "id": 2,
          "links": [],
          "pageSize": null,
          "scroll": true,
          "showHeader": true,
          "sort": {
            "col": 0,
            "desc": true
          },
          "span": 12,
          "styles": [
            {
              "colorMode": "row",
              "colors": [
                "rgba(50, 172, 45, 0.97)",
                "rgba(237, 129, 40, 0.89)",
                "rgba(245, 54, 54, 0.9)"
              ],
              "decimals": 0,
              "pattern": "Current",
              "thresholds": [
                "0.99",
                "1.1"
              ],
              "type": "number",
              "unit": "short"
            }
          ],
          "targets": [
            {
              "expr": "kube_pod_status_phase{phase=\"Pending\"}",
              "intervalFactor": 1,
              "legendFormat": "{{namespace}} - {{pod}}",
              "metric": "kube_pod_status_phase",
              "refId": "A",
              "step": 60
            }
          ],
          "title": "Pods - Pending",
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
    "from": "2017-05-02T18:46:48.127Z",
    "to": "2017-05-03T18:46:48.131Z"
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
  "title": "Pod Statuses",
  "version": 1
}
