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
  "title": "Kubernetes Deployment metrics",
  "description": "Monitors Kubernetes deployments in cluster using Prometheus. Shows overall cluster CPU / Memory of deployments, replicas in each deployment. Uses Kube state metrics and cAdvisor metrics ",
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
          "span": 4,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Deployment.*$\"}) / sum (machine_memory_bytes{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
              "interval": "10s",
              "intervalFactor": 1,
              "refId": "A",
              "step": 10
            }
          ],
          "thresholds": "65, 90",
          "title": "Deployment memory usage",
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
          "span": 4,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Deployment.*$\"}[1m])) / sum (machine_cpu_cores{kubernetes_io_hostname=~\"^$Node$\"}) * 100",
              "interval": "10s",
              "intervalFactor": 1,
              "refId": "A",
              "step": 10
            }
          ],
          "thresholds": "65, 90",
          "title": "Deployment CPU usage",
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
          "format": "percent",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": true,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "180px",
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
          "span": 4,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum(kube_deployment_status_replicas_available{deployment=~\"^$Deployment$\"}) / sum(kube_deployment_status_replicas{deployment=~\"^$Deployment$\"}) * 100",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Replicas",
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{pod_name=~\"^$Deployment.*$\"})",
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (container_memory_working_set_bytes{kubernetes_io_hostname=~\"^$Node.*$\"})",
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
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 40,
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
          "postfix": " cores",
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{pod_name=~\"^$Deployment.*$\"}[1m]))",
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
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
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
          "postfix": " cores",
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum (machine_cpu_cores{kubernetes_io_hostname=~\"^$Node$\"})",
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
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 42,
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum(kube_deployment_status_replicas_available{deployment=~\"^$Deployment$\"})",
              "intervalFactor": 2,
              "refId": "A",
              "step": 40
            }
          ],
          "thresholds": "",
          "title": "Available",
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
          "format": "none",
          "gauge": {
            "maxValue": 100,
            "minValue": 0,
            "show": false,
            "thresholdLabels": false,
            "thresholdMarkers": true
          },
          "height": "100px",
          "id": 43,
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
          "span": 2,
          "sparkline": {
            "fillColor": "rgba(31, 118, 189, 0.18)",
            "full": false,
            "lineColor": "rgb(31, 120, 193)",
            "show": false
          },
          "targets": [
            {
              "expr": "sum(kube_deployment_status_replicas{deployment=~\"^$Deployment$\"})",
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
              "expr": "sum (rate (container_cpu_usage_seconds_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Deployment.*$\"}[1m])) by (io_kubernetes_pod_name)",
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
          "title": "Deployment CPU usage",
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
      "title": "Deployment CPU usage"
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
          "id": 24,
          "isNew": true,
          "legend": {
            "alignAsTable": true,
            "avg": true,
            "current": true,
            "hideEmpty": false,
            "hideZero": false,
            "max": false,
            "min": false,
            "rightSide": true,
            "show": true,
            "sideWidth": null,
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
              "expr": "sum (rate (container_cpu_usage_seconds_total{image!=\"\",name=~\"^k8s_.*\",io_kubernetes_container_name!=\"POD\",pod_name=~\"^$Deployment.*$\"}[1m])) by (io_kubernetes_container_name, io_kubernetes_pod_name)",
              "hide": false,
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "pod: {{ io_kubernetes_pod_name }} | {{ io_kubernetes_container_name }}",
              "metric": "container_cpu",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{image!=\"\",name!~\"^k8s_.*\",pod_name=~\"^$Deployment.*$\"}[1m])) by (pod_name, name, image)",
              "hide": false,
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "docker: {{ pod_name }} | {{ image }} ({{ name }})",
              "metric": "container_cpu",
              "refId": "B",
              "step": 10
            },
            {
              "expr": "sum (rate (container_cpu_usage_seconds_total{rkt_container_name!=\"\",pod_name=~\"^$Deployment.*$\"}[1m])) by (pod_name, rkt_container_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "rkt: {{ pod_name }} | {{ rkt_container_name }}",
              "metric": "container_cpu",
              "refId": "C",
              "step": 10
            }
          ],
          "timeFrom": null,
          "timeShift": null,
          "title": "Containers CPU usage",
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
      "title": "Containers CPU usage"
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
              "expr": "sum (rate (container_cpu_usage_seconds_total{id!=\"/\",pod_name=~\"^$Deployment.*$\"}[1m])) by (id)",
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
              "expr": "sum (container_memory_working_set_bytes{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Deployment.*$\"}) by (io_kubernetes_pod_name)",
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
          "title": "Deployment memory usage",
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
      "title": "Deployment memory usage"
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
              "expr": "sum (container_memory_working_set_bytes{id!=\"/\",pod_name=~\"^$Deployment.*$\"}) by (id)",
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
              "expr": "sum (rate (container_network_receive_bytes_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Deployment.*$\"}[1m])) by (io_kubernetes_pod_name)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "-> {{ io_kubernetes_pod_name }}",
              "metric": "network",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "- sum (rate (container_network_transmit_bytes_total{image!=\"\",name=~\"^k8s_.*\",pod_name=~\"^$Deployment.*$\"}[1m])) by (io_kubernetes_pod_name)",
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
          "title": "Deployment network I/O",
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
      "title": "Deployment network I/O"
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
              "expr": "sum (rate (container_network_receive_bytes_total{id!=\"/\",pod_name=~\"^$Deployment.*$\"}[1m])) by (id)",
              "interval": "10s",
              "intervalFactor": 1,
              "legendFormat": "-> {{ id }}",
              "metric": "network",
              "refId": "A",
              "step": 10
            },
            {
              "expr": "- sum (rate (container_network_transmit_bytes_total{id!=\"/\",pod_name=~\"^$Deployment.*$\"}[1m])) by (id)",
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
      "showTitle": false,
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
        "name": "Deployment",
        "options": [],
        "query": "label_values(deployment)",
        "refresh": 1,
        "type": "query"
      },
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
      }
    ]
  },
  "annotations": {
    "list": []
  },
  "refresh": "10s",
  "schemaVersion": 12,
  "version": 6,
  "links": [],
  "gnetId": 741
}
