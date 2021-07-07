# Generated by Django 3.2.5 on 2021-07-07 20:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClienteCredito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('dni', models.CharField(max_length=50)),
                ('telefono', models.CharField(blank=True, max_length=50, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('deuda_sbs', models.FloatField(default=0)),
                ('riesgo_sentinel', models.CharField(blank=True, choices=[('B', 'Bueno'), ('R', 'Regular'), ('M', 'Malo')], max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='SolicitudCredito',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('monto', models.FloatField()),
                ('indicador_ai', models.IntegerField(default=1)),
                ('estado', models.CharField(choices=[('A', 'Aprobado'), ('R', 'Rechazado'), ('E', 'Espera')], default='E', max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='creditos.clientecredito')),
            ],
        ),
    ]