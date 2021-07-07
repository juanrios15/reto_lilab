from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser
from .serializers import SolicitudCreditoSerializer
from creditos.models import SolicitudCredito

# Create your views here.

class SolicitudCreditoViewSet(viewsets.ModelViewSet):
        serializer_class= SolicitudCreditoSerializer
        permission_classes = [IsAdminUser]
        
        def get_queryset(self):
            return SolicitudCredito.objects.filter(monto__lte=50000, estado="E").order_by('-created_at')