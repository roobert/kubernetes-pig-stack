{
  "__inputs": [
    {
      "name": "DS_PROMETHEUS",
      "label": "Prometheus",
      "description": "",
      "type": "datasource",
      "pluginId": "prometheus",
      "pluginName": "Prometheus"
    }
  ],
  "__requires": [
    {
      "type": "panel",
      "id": "text",
      "name": "Text",
      "version": ""
    },
    {
      "type": "panel",
      "id": "singlestat",
      "name": "Singlestat",
      "version": ""
    },
    {
      "type": "panel",
      "id": "graph",
      "name": "Graph",
      "version": ""
    },
    {
      "type": "grafana",
      "id": "grafana",
      "name": "Grafana",
      "version": "3.1.0"
    },
    {
      "type": "datasource",
      "id": "prometheus",
      "name": "Prometheus",
      "version": "1.0.0"
    }
  ],
  "id": null,
  "title": "Kubernetes Pod Metrics",
  "description": "Monitors Kubernetes cluster using Prometheus. Shows overall cluster CPU / Memory / Filesystem usage as well as individual pod, containers, systemd services statistics. Uses cAdvisor metrics only.",
  "tags": [
    "kubernetes"
  ],
  "style": "dark",
  "timezone": "browser",
  "editable": true,
  "hideControls": false,
  "sharedCrosshair": false,
  "rows": [
    {
      "collapse": false,
      "editable": true,
      "height": "20px",
      "panels": [
        {
          "content": "# $Pod_ip",
          "editable": true,
          "error": false,
          "height": "1px",
          "id": 34,
          "isNew": true,
          "links": [],
          "minSpan": null,
          "mode": "markdown",
          "span": 3,
          "style": {
            "font-size": "72pt"
          },
          "title": "Pod IP Address",
          "type": "text"
        },
        {
          "content": "# $phase",
          "editable": true,
          "error": false,
          "height": "1px",
          "id": 35,
          "isNew": true,
          "links": [],
          "mode": "markdown",
          "span": 3,
          "title": "Pod Status",
          "type": "text"
        },
        {
          "content": "# $container",
          "editable": true,
          "error": false,
          "id": 40,
          "isNew": true,
          "links": [],
          "mode": "markdown",
          "span": 3,
          "title": "Pod Container",
          "type": "text"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "id": 41,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "kube_pod_container_status_restarts{pod=~\"$Pod.*$\"}",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Container restarts",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        }
      ],
      "showTitle": true,
      "title": "Pod Info"
    },
    {
      "collapse": false,
      "editable": true,
      "height": "200px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)",
            "thresholdLine": false
          },
          "height": "200px",
          "id": 32,
          "isNew": true,
          "legend": {
            "alignAsTable": false,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": false,
            "show": false,
            "sideWidth": 200,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (rate (container_network_receive_bytes_total{pod_name=~\"^$Pod$\"}[1m]))",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "Received",
              "metric": "network",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "- sum (rate (container_network_transmit_bytes_total{pod_name=~\"^$Pod$\"}[1m]))",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "Sent",
              "metric": "network",
              "refId": "B",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "Network I/O pressure",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 0,
            "value_type": "cumulative"
          },
          "transparent": false,
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "Bps",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "Bps",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "title": "Network I/O pressure"
    },
    {
      "collapse": false,
      "editable": true,
      "height": "250px",
      "panels": [
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": true,
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "percent",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": true,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "180px",
          "id": 4,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 6,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Pod$\"}) / sum (machine_memory_bytes{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
              "interval": "10s",
              "intervalFactor": 1,
              "refId": "A",
              "step": 10
            }
          ],
          "thresholds": "65, 90",
          "title": "Pod memory usage",
          "transparent": false,
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "current"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": true,
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "format": "percent",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": true,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "180px",
          "id": 6,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 6,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Pod$\"}[1m])) / sum (machine_cpu_cores{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
              "interval": "10s",
              "intervalFactor": 1,
              "refId": "A",
              "step": 10
            }
          ],
          "thresholds": "65, 90",
          "title": "Pod CPU usage",
          "type": "singlestat",
          "valueFontSize": "80%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "current"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "bytes",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 36,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Pod$\"})",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Used",
          "type": "singlestat",
          "valueFontSize": "50%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "bytes",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 37,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (machine_memory_bytes{kubernetes_io_hostname=~\"^$Node$\"})",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Total",
          "type": "singlestat",
          "valueFontSize": "50%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "bytes",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 38,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Pod$\"}[1m]))",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Used",
          "type": "singlestat",
          "valueFontSize": "50%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "datasource": "Prometheus",
          "editable": true,
          "error": false,
          "format": "bytes",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 39,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "50%",
          "prefix": "",
          "prefixFontSize": "50%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 3,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{kubernetes_io_hostname=~\"^$Node$\"}[1m]))",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Total",
          "type": "singlestat",
          "valueFontSize": "50%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "avg"
        },
        {
          "cacheTimeout": null,
          "colorBackground": false,
          "colorValue": false,
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "format": "bytes",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "1px",
          "id": 9,
          "interval": null,
          "isNew": true,
          "links": [],
          "mappingType": 1,
          "mappingTypes": [
            {
              "name": "value to text",
              "value": 1
            },
            {
              "name": "range to text",
              "value": 2
            }
          ],
          "maxDataPoints": 100,
          "nullPointMode": "connected",
          "nullText": null,
          "postfix": "",
          "postfixFontSize": "20%",
          "prefix": "",
          "prefixFontSize": "20%",
          "rangeMaps": [
            {
              "from": "null",
              "text": "N/A",
              "to": "null"
            }
          ],
          "span": 12,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Pod$\"})",
              "interval": "10s",
              "intervalFactor": 1,
              "refId": "A",
              "step": 10
            }
          ],
          "thresholds": "",
          "title": "Pod memory working bytes",
          "type": "singlestat",
          "valueFontSize": "50%",
          "valueMaps": [
            {
              "op": "=",
              "text": "N/A",
              "value": "null"
            }
          ],
          "valueName": "current"
        }
      ],
      "showTitle": false,
      "title": "Total usage"
    },
    {
      "collapse": false,
      "editable": true,
      "height": "250px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 3,
          "editable": true,
          "error": false,
          "fill": 0,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "height": "",
          "id": 17,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": true,
            "show": true,
            "sort": null,
            "sortDesc": null,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Pod$\"}[1m])) by (io_kubernetes_pod_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "{{ io_kubernetes_pod_name }}",
              "metric": "container_cpu",
              "refId": "A",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "Pods CPU usage",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "transparent": false,
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "none",
              "label": "cores",
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "showTitle": false,
      "title": "Pods CPU usage"
    },
    {
      "collapse": false,
      "editable": true,
      "height": "500px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 3,
          "editable": true,
          "error": false,
          "fill": 0,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "id": 20,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": false,
            "show": true,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{id!=\"/\",pod_name=~\"^$Pod$\"}[1m])) by (id)",
              "hide": false,
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "{{ id }}",
              "metric": "container_cpu",
              "refId": "A",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "All processes CPU usage",
          "tooltip": {
            "msResolution": true,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "percent",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "repeat": null,
      "showTitle": false,
      "title": "All processes CPU usage"
    },
    {
      "collapse": false,
      "editable": true,
      "height": "250px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "fill": 0,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "id": 25,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": true,
            "show": true,
            "sideWidth": 200,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Pod$\"}) by (io_kubernetes_pod_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "{{ io_kubernetes_pod_name }}",
              "metric": "container_memory_usage:sort_desc",
              "refId": "A",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "Pods memory usage",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "bytes",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "title": "Pods memory usage"
    },
    {
      "collapse": true,
      "editable": true,
      "height": "500px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "fill": 0,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "id": 28,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": false,
            "show": true,
            "sideWidth": 200,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{id!=\"/\",pod_name=~\"^$Pod$\"}) by (id)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "{{ id }}",
              "metric": "container_memory_usage:sort_desc",
              "refId": "A",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "All processes memory usage",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "bytes",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "title": "All processes memory usage"
    },
    {
      "collapse": true,
      "editable": true,
      "height": "250px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "id": 16,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": true,
            "show": true,
            "sideWidth": 200,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (rate (container_network_receive_bytes_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Pod$\"}[1m])) by (io_kubernetes_pod_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "-> {{ io_kubernetes_pod_name }}",
              "metric": "network",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "- sum (rate (container_network_transmit_bytes_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Pod$\"}[1m])) by (io_kubernetes_pod_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "<- {{ io_kubernetes_pod_name }}",
              "metric": "network",
              "refId": "B",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "Pods network I/O",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "Bps",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "title": "Pods network I/O"
    },
    {
      "collapse": true,
      "editable": true,
      "height": "500px",
      "panels": [
        {
          "aliasColors": {},
          "bars": false,
          "datasource": "Prometheus",
          "decimals": 2,
          "editable": true,
          "error": false,
          "fill": 1,
          "grid": {
            "threshold1": null,
            "threshold1Color": "rgba(216, 200, 27, 0.27)",
            "threshold2": null,
            "threshold2Color": "rgba(234, 112, 112, 0.22)"
          },
          "id": 29,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "max": false,
            "min": false,
            "rightSide": false,
            "show": true,
            "sideWidth": 200,
            "sort": "current",
            "sortDesc": true,
            "total": false,
            "values": true
          },
          "lines": true,
          "linewidth": 2,
          "links": [],
          "nullPointMode": "connected",
          "percentage": false,
          "pointradius": 5,
          "points": false,
          "renderer": "flot",
          "seriesOverrides": [],
          "span": 12,
          "stack": false,
          "steppedLine": false,
          "targets": [
            {
              "expr": "sum (rate (container_network_receive_bytes_total{id!=\"/\",pod_name=~\"^$Pod$\"}[1m])) by (id)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "-> {{ id }}",
              "metric": "network",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "- sum (rate (container_network_transmit_bytes_total{id!=\"/\",pod_name=~\"^$Pod$\"}[1m])) by (id)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "<- {{ id }}",
              "metric": "network",
              "refId": "B",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "All processes network I/O",
          "tooltip": {
            "msResolution": false,
            "shared": true,
            "sort": 2,
            "value_type": "cumulative"
          },
          "type": "graph",
          "xaxis": {
            "show": true
          },
          "yaxes": [
            {
              "format": "Bps",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": true
            },
            {
              "format": "short",
              "label": null,
              "logBase": 1,
              "max": null,
              "min": null,
              "show": false
            }
          ]
        }
      ],
      "title": "All processes network I/O"
    }
  ],
  "time": {
    "from": "now-30m",
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
  "templating": {
    "list": [
      {
        "allValue": ".*",
        "current": {},
        "datasource": "Prometheus",
        "hide": 0,
        "includeAll": true,
        "multi": false,
        "name": "Node",
        "options": [],
        "query": "label_values(kubernetes_io_hostname)",
        "refresh": 1,
        "type": "query"
      },
      {
        "allValue": ".*",
        "current": {},
        "datasource": "Prometheus",
        "hide": 0,
        "includeAll": true,
        "label": "Pod",
        "multi": false,
        "name": "Pod",
        "options": [],
        "query": "label_values(kube_pod_info, pod)",
        "refresh": 1,
        "regex": "",
        "type": "query"
      },
      {
        "current": {},
        "datasource": "Prometheus",
        "hide": 2,
        "includeAll": false,
        "multi": false,
        "name": "Pod_ip",
        "options": [],
        "query": "label_values(kube_pod_info, pod_ip)",
        "refresh": 1,
        "regex": "",
        "type": "query",
        "useTags": false
      },
      {
        "current": {},
        "datasource": "Prometheus",
        "hide": 2,
        "includeAll": false,
        "multi": false,
        "name": "phase",
        "options": [],
        "query": "label_values(kube_pod_status_phase, phase)",
        "refresh": 1,
        "type": "query"
      },
      {
        "current": {},
        "datasource": "Prometheus",
        "hide": 2,
        "includeAll": false,
        "multi": false,
        "name": "container",
        "options": [],
        "query": "label_values(kube_pod_container_info, container)",
        "refresh": 1,
        "type": "query"
      }
    ]
  },
  "annotations": {
    "list": []
  },
  "refresh": "10s",
  "schemaVersion": 12,
  "version": 8,
  "links": [],
  "gnetId": 747
}
