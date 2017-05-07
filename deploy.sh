kubectl create namespace monitoring

kubectl apply -f influxdb/configmap.yaml
kubectl apply -f influxdb/storage-class.yaml
kubectl apply -f influxdb/persistent-storage-claim.yaml
kubectl apply -f influxdb/deployment.yaml
kubectl apply -f influxdb/service.yaml

kubectl apply -f prometheus/node-exporter/daemonset.yaml
kubectl apply -f prometheus/node-exporter/service.yaml

kubectl create configmap blackbox-exporter-configmap --from-file blackbox-exporter/conf -o yaml --dry-run \
  | kubectl --namespace monitoring apply -f -
kubectl apply -f prometheus/blackbox-exporter/deployment.yaml
kubectl apply -f prometheus/blackbox-exporter/service.yaml

kubectl apply -f prometheus/kube-state-metrics/deployment.yaml
kubectl apply -f prometheus/kube-state-metrics/service.yaml

kubectl create configmap prometheus-configmap --from-file prometheus/prometheus-server/conf/ -o yaml --dry-run \
  | kubectl --namespace monitoring apply -f -
kubectl apply -f prometheus/prometheus-server/deployment.yaml
kubectl apply -f prometheus/prometheus-server/service.yaml

kubectl create configmap kubernetes-dashboards --from-file grafana/dashboards -o yaml --dry-run \
  | kubectl --namespace monitoring apply -f -
kubectl apply -f grafana/configmap.yaml
kubectl apply -f grafana/deployment.yaml
kubectl apply -f grafana/service.yaml
