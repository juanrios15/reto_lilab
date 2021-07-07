from rest_framework import serializers
from .models import ClienteCredito, SolicitudCredito


class ClienteCreditoSerializer(serializers.ModelSerializer):
    
    riesgo_sentinel = serializers.CharField(source='get_riesgo_sentinel_display')
    class Meta:
        
        model = ClienteCredito
        fields = '__all__'
        

class SolicitudCreditoSerializer(serializers.ModelSerializer):
    
    cliente = ClienteCreditoSerializer()
    
    class Meta:
        model = SolicitudCredito
        fields = '__all__'
        