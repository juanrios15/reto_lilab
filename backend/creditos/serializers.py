from rest_framework import serializers

from .models import ClienteCredito, SolicitudCredito


class ClienteCreditoSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = ClienteCredito
        fields = '__all__'

class SolicitudCreditoSerializer(serializers.ModelSerializer):
    
    cliente = ClienteCreditoSerializer()
    
    class Meta:
        model = SolicitudCredito
        fields = '__all__'
        